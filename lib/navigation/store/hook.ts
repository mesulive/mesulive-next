import { useRecoilCallback } from "~/lib/hooks/recoil";
import { openAtom } from "~/lib/navigation/store/states";

export const useNavigation = () => {
  const toggleNavigation = useRecoilCallback(
    ({ set }) =>
      () =>
        set(openAtom, (currVal) => !currVal),
    []
  );

  return {
    toggleNavigation,
  };
};
