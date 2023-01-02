import { atomFamily, DefaultValue, selectorFamily } from "recoil";
import { PrimaryStat } from "~/lib/maple/types";
import { values } from "~/lib/object";

export namespace ProfileState {
  export const statEfficiencyMapAtoms = atomFamily<
    Record<PrimaryStat, number>,
    string
  >({
    key: "profile/statEfficiencyAtoms",
    default: values(PrimaryStat.enum).reduce(
      (acc, stat) => ({
        ...acc,
        [stat]: 0,
      }),
      {} as Record<PrimaryStat, number>
    ),
  });

  export const statEfficiencySelectors = selectorFamily<
    number,
    { nickname: string; key: PrimaryStat }
  >({
    key: "profile/statEfficiencySelector",
    get:
      ({ nickname, key }) =>
      ({ get }) =>
        get(statEfficiencyMapAtoms(nickname))[key],
    set:
      ({ nickname, key }) =>
      ({ set }, newValue) => {
        set(statEfficiencyMapAtoms(nickname), (currVal) => ({
          ...currVal,
          [key]: newValue instanceof DefaultValue ? 0 : newValue,
        }));
      },
  });
}
