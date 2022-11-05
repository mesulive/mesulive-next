import { atom } from "recoil";

export const openAtom = atom<boolean>({
  key: "navigation/openAtom",
  default: false,
});

export const hoverBoxTopAtom = atom<number>({
  key: "navigation/hoverBoxTopAtom",
  default: 0,
});

export const hoverBoxFirstRenderedAtom = atom<boolean>({
  key: "navigation/hoverBoxFirstRenderedAtom",
  default: true,
});

export const hoverBoxTopAnimatedAtom = atom<boolean>({
  key: "navigation/hoverBoxTopAnimatedAtom",
  default: false,
});
