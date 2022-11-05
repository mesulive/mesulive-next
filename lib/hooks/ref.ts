import { RefObject, useCallback, useRef } from "react";

export const useRefCallback = <T>(): [
  RefObject<T>,
  (node: T | null) => void
] => {
  const ref = useRef<T | null>(null);
  const setRef = useCallback((node: T | null) => {
    ref.current = node;
  }, []);

  return [ref, setRef];
};
