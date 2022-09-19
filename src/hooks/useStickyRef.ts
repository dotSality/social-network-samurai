import { useEffect, useRef, useState } from 'react';

export const useStickyRef = () => {
  const stickyRef = useRef<HTMLDivElement>(null);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const scrollCallback = () => {
      if (stickyRef) {
        const windowTop = window.pageYOffset;
        const { top } = stickyRef.current!.getBoundingClientRect();
        if (windowTop > top) setIsSticky(true);
        else setIsSticky(false);
      }
    };
    window.addEventListener('scroll', scrollCallback);
    return () => {
      window.removeEventListener('scroll', scrollCallback);
    };
  });

  return { stickyRef, isSticky };
};