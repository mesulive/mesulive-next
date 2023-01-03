import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { EMPTY_TEXT } from "~/lib/constants";
import { FlameState } from "~/lib/flame/store/states";
import { isWeaponType, WeaponType } from "~/lib/maple/types";
import { values } from "~/lib/object";

const LABEL = "무기 종류";

export const WeaponTypeSelect = () => {
  const equipType = useRecoilValue(FlameState.equipTypeAtom);
  const [weaponType, setWeaponType] = useRecoilState(FlameState.weaponTypeAtom);

  return (
    <FormControl disabled={equipType === "NON_WEAPON"}>
      <InputLabel>{LABEL}</InputLabel>
      <Select
        label={LABEL}
        value={weaponType}
        onChange={({ target: { value } }) => {
          if (isWeaponType(value)) {
            setWeaponType(value);
          }
        }}
      >
        {values(WeaponType.enum).map((weaponType) => (
          <MenuItem value={weaponType} key={weaponType}>
            {weaponType}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{EMPTY_TEXT}</FormHelperText>
    </FormControl>
  );
};
