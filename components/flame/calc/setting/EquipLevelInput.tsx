import { useSelector } from "@xstate/react";
import { useContext, useMemo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { FlowContext } from "~/components/common/context/FlowProvider";
import { NumberTextField } from "~/components/UI/atoms/textField";
import { EMPTY_TEXT } from "~/lib/constants";
import { FlameState } from "~/lib/flame/store/states";
import { FlowMachineState } from "~/lib/flow/machine";

export const EquipLevelInput = () => {
  const [equipLevel, setEquipLevel] = useRecoilState(FlameState.equipLevelAtom);
  const equipLevelError = useRecoilValue(FlameState.equipLevelErrorSelector);

  const inputUnfilledState = useSelector(
    useContext(FlowContext).service,
    (state) => state.matches(FlowMachineState.enum.inputUnfilled)
  );

  const inputUnfilled = useMemo(
    () => inputUnfilledState && equipLevel === undefined,
    [equipLevel, inputUnfilledState]
  );

  return (
    <NumberTextField
      label="장비 레벨"
      value={String(equipLevel || "")}
      onChange={({ target: { value } }) => {
        if (value === "") {
          setEquipLevel(undefined);
          return;
        }
        setEquipLevel(parseInt(value, 10));
      }}
      error={!!equipLevelError || inputUnfilled}
      helperText={
        equipLevelError ||
        (inputUnfilled && "장비 레벨을 입력해주세요") ||
        EMPTY_TEXT
      }
    />
  );
};
