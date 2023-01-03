import { atom, selector } from "recoil";
import { Flame } from "~/lib/flame";
import { WeaponType } from "~/lib/maple/types";

export namespace FlameState {
  export const equipTypeAtom = atom<Flame.EquipType>({
    key: "flame/equipTypeAtom",
    default: "NON_WEAPON",
  });

  export const weaponTypeAtom = atom<WeaponType>({
    key: "flame/weaponTypeAtom",
    default: "한손검",
  });

  export const methodsAtom = atom<Flame.Method[]>({
    key: "flame/methodsAtom",
    default: [],
  });

  export const equipLevelAtom = atom<number | undefined>({
    key: "flame/equipLevelAtom",
    default: undefined,
  });

  export const equipLevelErrorSelector = selector<string>({
    key: "flame/equipLevelInvalidSelector",
    get: ({ get }) => {
      const equipLevel = get(equipLevelAtom);

      if (!equipLevel) return "";
      if (equipLevel < 100 || equipLevel > 250)
        return "100 이상 250 이하의 수치를 입력해주세요.";

      return "";
    },
  });

  export const aimStatAtom = atom<number | undefined>({
    key: "flame/aimStatAtom",
    default: undefined,
  });

  export const aimStatErrorSelector = selector<string>({
    key: "flame/aimStatInvalidSelector",
    get: ({ get }) => {
      const aimStat = get(aimStatAtom);

      if (!aimStat) return "";
      if (aimStat < 1) return "1 이상의 수치를 입력해주세요.";

      return "";
    },
  });

  export const bossDropAtom = atom<boolean>({
    key: "flame/bossDrop",
    default: false,
  });

  export const inputUnfilledSelector = selector<boolean>({
    key: "flame/inputUnfilledSelector",
    get: ({ get }) =>
      [methodsAtom].some((atom) => !get(atom).length) ||
      [equipLevelAtom, aimStatAtom].some((atom) => get(atom) === undefined),
  });
}
