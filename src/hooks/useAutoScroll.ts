import { useEffect, useLayoutEffect, useRef, useState, type RefObject } from "react";

export const MIN_SPEED = 0.5;
export const MAX_SPEED = 2;
export const SPEED_STEP = 0.1;

/**
 * Desplaza suavemente `containerRef` de arriba a abajo a lo largo de `durationSec`.
 * El progreso se mide por tiempo activo transcurrido (no por distancia), así que si
 * `retargetKey` cambia (p. ej. el tamaño de letra) y el alto scrolleable cambia con
 * él, el próximo frame ya calcula la posición correcta para el mismo progreso —
 * sin necesidad de recalcular manualmente distancia/tiempo restante.
 *
 * La velocidad es un multiplicador sobre el tiempo real: cada segundo de reloj
 * cuenta como `speed` segundos de progreso. Al cambiarla se "cierra" el segmento
 * activo con la velocidad anterior antes de aplicar la nueva, para que el cambio
 * no produzca un salto en la posición del scroll.
 */
export function useAutoScroll(
  containerRef: RefObject<HTMLDivElement | null>,
  durationSec: number,
  retargetKey: unknown,
) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeedState] = useState(1);
  const activeElapsedRef = useRef(0); // segundos de progreso activo acumulados
  const segmentStartRef = useRef(0); // performance.now() al último resume/cambio de velocidad
  const speedRef = useRef(1);
  const rafRef = useRef<number>(undefined);

  const applyScrollFor = (elapsedSec: number) => {
    const el = containerRef.current;
    if (!el) return;
    const progress = Math.min(elapsedSec / durationSec, 1);
    const maxScroll = Math.max(el.scrollHeight - el.clientHeight, 0);
    el.scrollTop = progress * maxScroll;
  };

  // Acumula en activeElapsedRef el progreso del segmento en curso (a la velocidad
  // vigente) y reinicia el punto de partida del segmento a ahora.
  const foldCurrentSegment = () => {
    activeElapsedRef.current +=
      ((performance.now() - segmentStartRef.current) / 1000) * speedRef.current;
    segmentStartRef.current = performance.now();
  };

  const toggle = () => {
    if (isPlaying) {
      foldCurrentSegment();
      setIsPlaying(false);
      return;
    }
    // Si la canción ya terminó, el próximo Play reinicia desde el principio.
    if (activeElapsedRef.current >= durationSec) {
      activeElapsedRef.current = 0;
    }
    segmentStartRef.current = performance.now();
    setIsPlaying(true);
  };

  const setSpeed = (next: number) => {
    const clamped = Math.min(MAX_SPEED, Math.max(MIN_SPEED, next));
    if (isPlaying) foldCurrentSegment();
    speedRef.current = clamped;
    setSpeedState(clamped);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const tick = () => {
      const elapsedThisSegment =
        ((performance.now() - segmentStartRef.current) / 1000) * speedRef.current;
      const totalElapsed = activeElapsedRef.current + elapsedThisSegment;
      applyScrollFor(totalElapsed);

      if (totalElapsed >= durationSec) {
        activeElapsedRef.current = durationSec;
        setIsPlaying(false);
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  // Reajusta la posición de inmediato ante un cambio de retargetKey (tamaño de letra),
  // esté o no en reproducción.
  useLayoutEffect(() => {
    applyScrollFor(activeElapsedRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [retargetKey]);

  return { isPlaying, toggle, speed, setSpeed };
}
