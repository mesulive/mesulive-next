import { z } from "zod";

export const WeaponType = z.enum([
  "한손검",
  "한손도끼",
  "한손둔기",
  "스태프",
  "완드",
  "샤이닝 로드",
  "단검",
  "케인",
  "데스페라도",
  "에너지 소드",
  "소울 슈터",
  "ESP 리미터",
  "체인",
  "매직 건틀렛",
  "부채",
  "튜너",
  "브레스 슈터",
  "두손검",
  "두손도끼",
  "두손둔기",
  "창",
  "폴암",
  "태도 & 대검",
  "건틀렛 리볼버",
  "활",
  "석궁",
  "듀얼 보우건",
  "에인션트 보우",
  "아대",
  "차크람",
  "건",
  "너클",
  "핸드캐논",
]);

export type WeaponType = z.infer<typeof WeaponType>;

export const isWeaponType = (target: unknown): target is WeaponType =>
  WeaponType.safeParse(target).success;
