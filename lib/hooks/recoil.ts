import { useEffect, useState } from "react";
import {
  CallbackInterface,
  RecoilValue,
  useRecoilCallback as useOriginalRecoilCallback,
  useRecoilValueLoadable,
} from "recoil";

export const useRecoilCallback = <Args extends ReadonlyArray<unknown>, Return>(
  fn: (
    callBackInterface: CallbackInterface & {
      get: <T>(recoilVal: RecoilValue<T>) => T;
      promise: <T>(recoilVal: RecoilValue<T>) => Promise<T>;
    }
  ) => (...args: Args) => Return,
  deps?: ReadonlyArray<unknown>
): ((...args: Args) => Return) => {
  return useOriginalRecoilCallback(
    ({ snapshot, ...restInterface }) =>
      fn({
        snapshot,
        ...restInterface,
        get: (recoilVal) => snapshot.getLoadable(recoilVal).getValue(),
        promise: (recoilVal) => snapshot.getPromise(recoilVal),
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps ?? []
  );
};

export const useContinuousRecoilValue = <T>(
  recoilValue: RecoilValue<T>,
  defaultValue: T
) => {
  const [state, setState] = useState<T>(defaultValue);
  const [error, setError] = useState<Error | undefined>();
  const loadable = useRecoilValueLoadable(recoilValue);

  useEffect(() => {
    switch (loadable.state) {
      case "hasValue":
        setState(loadable.getValue());
        setError(undefined);
        break;
      case "hasError":
        setError(loadable.contents);
      /* fall through */
      default:
        break;
    }
  }, [loadable]);

  return { state, error };
};
