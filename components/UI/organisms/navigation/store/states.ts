import { atom } from "recoil";

export const openAtom = atom<boolean>({
  key: "navigation/openAtom",
  default: false,
});

export const hoverBoxTopAtom = atom<number>({
  key: "navigation/hoverBoxTopAtom",
  default: 0,
});
