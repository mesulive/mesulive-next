import { act, cleanup, waitFor } from "@testing-library/react";
import { useState } from "react";
import { atom, selector } from "recoil";
import { v4 } from "uuid";
import {
  useContinuousRecoilValue,
  useRecoilCallback,
} from "~/lib/hooks/recoil";
import { renderHook } from "~/lib/test";

jest.useFakeTimers();

afterAll(cleanup);

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

describe("useContinuousRecoilValue", () => {
  const DEFAULT_VALUE = 0;

  const asyncNumberSelector2 = selector({
    key: v4(),
    get: async () => {
      return DEFAULT_VALUE;
    },
  });

  const useTestContinuousRecoilValue = () => {
    const { state } = useContinuousRecoilValue(asyncNumberSelector2, -1);
    const refreshNumber = useRecoilCallback(
      ({ refresh }) =>
        () => {
          refresh(asyncNumberSelector2);
        },
      []
    );

    return { state, refreshNumber };
  };

  /**
   * 테스트 라이브러리 버그로 skip 처리
   * https://github.com/testing-library/react-testing-library/issues/1051
   */
  test.skip("initial value", async () => {
    const { result } = await waitFor(() =>
      renderHook(() => useTestContinuousRecoilValue())
    );
    expect(result.current.state).toBe(-1);
    cleanup();
  });

  /**
   * 테스트 라이브러리 버그로 skip 처리
   * https://github.com/testing-library/react-testing-library/issues/1051
   */
  test.skip("after 20ms", async () => {
    const { result } = await waitFor(() =>
      renderHook(() => useTestContinuousRecoilValue())
    );
    jest.advanceTimersByTime(20);
    expect(result.current.state).toBe(DEFAULT_VALUE);
  });
});
