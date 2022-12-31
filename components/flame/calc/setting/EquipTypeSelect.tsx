import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useRecoilState } from "recoil";
import { EMPTY_TEXT } from "~/lib/constants";
import { FlameState } from "~/lib/flame/store/states";
import { Flame } from "~/lib/flame/types";
import { values } from "~/lib/object";

const LABEL = "장비 종류";

export const EquipTypeSelect = () => {
  const [equipType, setEquipType] = useRecoilState(FlameState.equipTypeAtom);

  return (
    <FormControl>
      <InputLabel>{LABEL}</InputLabel>
      <Select
        label={LABEL}
        value={equipType}
        onChange={({ target: { value } }) => {
          if (Flame.isEquipType(value)) {
            setEquipType(value);
          }
        }}
      >
        {values(Flame.EquipType.enum).map((equipType) => (
          <MenuItem value={equipType} key={equipType}>
            {Flame.EquipTypeInfoMap[equipType].text}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{EMPTY_TEXT}</FormHelperText>
    </FormControl>
  );
};
