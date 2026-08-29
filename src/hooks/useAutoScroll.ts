import { useEffect, useLayoutEffect, useRef, useState, type RefObject } from "react";

/**
 * Desplaza suavemente `containerRef` de arriba a abajo a lo largo de `durationSec`.
 * El progreso se mide por tiempo activo transcurrido (no por distancia), así que si
 * `retargetKey` cambia (p. ej. el tamaño de letra) y el alto scrolleable cambia con
 * él, el próximo frame ya calcula la posición correcta para el mismo progreso —
 * sin necesidad de recalcular manualmente distancia/tiempo restante.
 */
export function useAutoScroll(
  containerRef: RefObject<HTMLDivElement | null>,
  durationSec: number,
  retargetKey: unknown,
) {
  const [isPlaying, setIsPlaying] = useState(false);
  const activeElapsedRef = useRef(0); // segundos de reproducción activa acumulados
  const segmentStartRef = useRef(0); // performance.now() al último resume
  const rafRef = useRef<number>(undefined);

  const applyScrollFor = (elapsedSec: number) => {
    const el = containerRef.current;
    if (!el) return;
    const progress = Math.min(elapsedSec / durationSec, 1);
    const maxScroll = Math.max(el.scrollHeight - el.clientHeight, 0);
    el.scrollTop = progress * maxScroll;
  };

  const toggle = () => {
    if (isPlaying) {
      activeElapsedRef.current += (performance.now() - segmentStartRef.current) / 1000;
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

  useEffect(() => {
    if (!isPlaying) return;

    const tick = () => {
      const elapsedThisSegment = (performance.now() - segmentStartRef.current) / 1000;
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

  return { isPlaying, toggle };
}
