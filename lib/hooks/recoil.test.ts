import { act } from "@testing-library/react";
import { useState } from "react";
import { atom, selector } from "recoil";
import { v4 } from "uuid";
import { useRecoilCallback } from "~/lib/hooks/recoil";
import { renderHook } from "~/lib/test";

jest.useFakeTimers();

describe("useRecoilCallback", () => {
  const DEFAULT_VALUE = 0;

  const numberAtom = atom({ key: "test/number", default: DEFAULT_VALUE });

  const asyncNumberSelector = selector({
    key: v4(),
    get: () => Promise.resolve(DEFAULT_VALUE),
  });

  const useTestCustomRecoilCallback = () => {
    const [count, setCount] = useState(10);

    const getCallback = useRecoilCallback(
      ({ get }) =>
        () => {
          return get(numberAtom);
        },
      []
    );

    const getPromiseCallback = useRecoilCallback(
      ({ promise }) =>
        async () => {
          return promise(asyncNumberSelector);
        },
      []
    );

    const setCallback = useRecoilCallback(
      ({ set }) =>
        (num: number) => {
          set(numberAtom, num);
        },
      []
    );

    const dependedSetCallback = useRecoilCallback(
      ({ set }) =>
        () => {
          set(numberAtom, count);
        },
      [count]
    );

    const wrongDependedSetCallback = useRecoilCallback(
      ({ set }) =>
        () => {
          set(numberAtom, count);
        },
      /* eslint-disable-next-line react-hooks/exhaustive-deps */
      []
    );

    return {
      getCallback,
      getPromiseCallback,
      setCallback,
      dependedSetCallback,
      wrongDependedSetCallback,
      count,
      setCount,
    };
  };

  test("get", () => {
    const { result } = renderHook(() => useTestCustomRecoilCallback());

    const number = result.current.getCallback();
    expect(number).toBe(DEFAULT_VALUE);
  });

  test("promise", async () => {
    const { result } = renderHook(() => useTestCustomRecoilCallback());

    const number = await result.current.getPromiseCallback();
    expect(number).toBe(DEFAULT_VALUE);
  });

  test("set", () => {
    const { result } = renderHook(() => useTestCustomRecoilCallback());

    act(() => result.current.setCallback(2));
    expect(result.current.getCallback()).toBe(2);
  });

  test("depended", () => {
    const { result } = renderHook(() => useTestCustomRecoilCallback());

    act(() => result.current.setCount(20));
    act(() => result.current.dependedSetCallback());
    expect(result.current.getCallback()).toBe(20);
  });

  test("wrong depended", () => {
    const { result } = renderHook(() => useTestCustomRecoilCallback());

    act(() => result.current.setCount(20));
    act(() => result.current.wrongDependedSetCallback());
    expect(result.current.getCallback()).toBe(10);
  });
});
