import { useEffect, useState } from 'react';

export const useDebounceValue = <T>(value: T, delay: number = 1000) => {
  const [state, setState] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setState(value);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [delay, value]);

  return state;
};