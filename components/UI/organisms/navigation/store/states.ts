import { atom } from "recoil";

export const openAtom = atom<boolean>({
  key: "navigation/openAtom",
  default: false,
});
