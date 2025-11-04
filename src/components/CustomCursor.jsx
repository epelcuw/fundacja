import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) {
      return undefined;
    }

    const defaultColors = { fill: '#50d9d5' };
    let rafId;
    const position = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const setCursorFill = (fill) => {
      cursor.style.setProperty('--cursor-fill', fill);
    };

    setCursorFill(defaultColors.fill);

    const updateCursorPosition = () => {
      cursor.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
      rafId = null;
    };

    const handlePointerMove = (event) => {
      position.x = event.clientX;
      position.y = event.clientY;

      if (!rafId) {
        rafId = requestAnimationFrame(updateCursorPosition);
      }
    };

    const handlePointerDown = () => cursor.classList.add('is-pressed');
    const handlePointerUp = () => cursor.classList.remove('is-pressed');

    const handlePointerOver = (event) => {
      const target = event.target.closest('[data-cursor]');
      if (!target) {
        setCursorFill(defaultColors.fill);
        return;
      }
      const accent = target.dataset.cursor?.trim() || defaultColors.fill;
      setCursorFill(accent);
    };

    const handlePointerOut = () => {
      setCursorFill(defaultColors.fill);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    document.addEventListener('pointerover', handlePointerOver);
    document.addEventListener('pointerout', handlePointerOut);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('pointerover', handlePointerOver);
      document.removeEventListener('pointerout', handlePointerOut);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef} aria-hidden="true" />;
};

export default CustomCursor;
