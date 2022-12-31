import { TextField } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { FlameState } from "~/lib/flame/store/states";

export const EquipLevelInput = () => {
  const [equipLevel, setEquipLevel] = useRecoilState(FlameState.equipLevelAtom);
  const equipLevelError = useRecoilValue(FlameState.equipLevelErrorSelector);

  return (
    <TextField
      label="장비 레벨"
      value={String(equipLevel || "")}
      onChange={({ target: { value } }) => {
        const refinedValue = value.replace(/\D+/g, "");
        if (refinedValue === "") {
          setEquipLevel(undefined);
          return;
        }
        setEquipLevel(parseInt(refinedValue, 10));
      }}
      onKeyDown={(event) => {
        if (["e", "E", "+", "-"].includes(event.key)) {
          event.preventDefault();
        }
      }}
      type="number"
      error={!!equipLevelError}
      helperText={equipLevelError}
    />
  );
};
