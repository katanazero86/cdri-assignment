import { useEffect, useRef } from 'react';

export const useOutsideClick = (callback: () => void) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ac = new AbortController();
    const signal = ac.signal;
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside, {
      signal,
    });
    return () => {
      ac.abort(); // 이벤트 리스너 제거
    };
  }, []);

  return {
    containerRef,
  };
};
