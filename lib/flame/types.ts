import { z } from "zod";

export const EquipType = z.enum(["NON_WEAPON", "WEAPON"]);
export type EquipType = z.infer<typeof EquipType>;

export const isEquipType = (value: unknown): value is EquipType =>
  EquipType.safeParse(value).success;

export const EquipTypeInfoMap: Record<EquipType, { text: string }> = {
  NON_WEAPON: { text: "방어구" },
  WEAPON: { text: "무기" },
};

export const Method = z.enum([
  "DROP",
  "POWERFUL",
  "ETERNAL",
  "CRAFT_MASTER",
  "CRAFT_MEISTER",
  "FUSE_MASTER",
  "FUSE_MEISTER",
]);
export type Method = z.infer<typeof Method>;

export const isMethod = (value: unknown): value is Method =>
  Method.safeParse(value).success;

export const MethodInfoMap: Record<Method, { text: string }> = {
  DROP: { text: "몬스터 드랍" },
  POWERFUL: { text: "강력한 환생의 불꽃" },
  ETERNAL: { text: "영원한 환생의 불꽃" },
  CRAFT_MASTER: { text: "장인 제작" },
  CRAFT_MEISTER: { text: "명장 제작" },
  FUSE_MASTER: { text: "장인 합성" },
  FUSE_MEISTER: { text: "명장 합성" },
};
