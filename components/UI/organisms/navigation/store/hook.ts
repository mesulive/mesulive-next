import { openAtom } from "~/components/UI/organisms/navigation/store/states";
import { useRecoilCallback } from "~/lib/hooks/recoil";

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
