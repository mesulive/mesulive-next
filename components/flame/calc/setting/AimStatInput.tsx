import { useSelector } from "@xstate/react";
import { useContext, useMemo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { FlowContext } from "~/components/common/context/FlowProvider";
import { NumberTextField } from "~/components/UI/atoms/textField";
import { EMPTY_TEXT } from "~/lib/constants";
import { FlameState } from "~/lib/flame/store/states";
import { FlowMachineState } from "~/lib/flow/machine";

export const AimStatInput = () => {
  const [aimStat, setAimStat] = useRecoilState(FlameState.aimStatAtom);
  const aimStatError = useRecoilValue(FlameState.aimStatErrorSelector);

  const inputUnfilledState = useSelector(
    useContext(FlowContext).service,
    (state) => state.matches(FlowMachineState.enum.inputUnfilled)
  );

  const inputUnfilled = useMemo(
    () => inputUnfilledState && aimStat === undefined,
    [aimStat, inputUnfilledState]
  );

  return (
    <NumberTextField
      value={String(aimStat ?? "")}
      onChange={({ target: { value } }) => {
        setAimStat(value ? Number(value) : undefined);
      }}
      label="목표 환산 스탯"
      error={!!aimStatError || inputUnfilled}
      helperText={
        aimStatError ||
        (inputUnfilled && "목표 환산 스탯을 입력해주세요") ||
        EMPTY_TEXT
      }
    />
  );
};
