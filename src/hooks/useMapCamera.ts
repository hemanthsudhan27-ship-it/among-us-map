import { useState, useEffect, useCallback, useRef } from 'react';
import { WORLD_WIDTH, WORLD_HEIGHT } from '../data/mapData';

export function useMapCamera(viewportWidth: number, viewportHeight: number) {
  const [zoom, setZoom] = useState(0.8);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  // Center camera initially
  useEffect(() => {
    if (viewportWidth > 0 && viewportHeight > 0 && offset.x === 0 && offset.y === 0) {
      const targetX = (viewportWidth - WORLD_WIDTH * zoom) / 2;
      const targetY = (viewportHeight - WORLD_HEIGHT * zoom) / 2;
      setOffset({ x: targetX, y: targetY });
    }
  }, [viewportWidth, viewportHeight, zoom]);

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    setZoom(prev => {
      const newZoom = prev - e.deltaY * 0.001;
      return Math.max(0.3, Math.min(newZoom, 3));
    });
  }, []);

  const handlePointerDown = useCallback((e: PointerEvent) => {
    isDragging.current = true;
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (!isDragging.current) return;

    const dx = e.clientX - lastMousePos.current.x;
    const dy = e.clientY - lastMousePos.current.y;

    setOffset(prev => ({
      x: prev.x + dx,
      y: prev.y + dy
    }));

    lastMousePos.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [handleWheel, handlePointerDown, handlePointerMove, handlePointerUp]);

  return {
    zoom,
    offset,
  };
}
