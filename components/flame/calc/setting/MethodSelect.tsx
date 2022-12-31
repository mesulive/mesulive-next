import {
  Checkbox,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { pipe } from "fp-ts/function";
import { useContext } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { GlobalContext } from "~/components/common/context/GlobalProvider";
import { FlameState } from "~/lib/flame/store/states";
import { Flame } from "~/lib/flame/types";
import { FlowState } from "~/lib/flow/store/states";
import { values } from "~/lib/object";
import { COLORS } from "~/styles/colors";

const LABEL = "추가옵션 설정 수단";

export const MethodSelect = () => {
  const [method, setMethod] = useRecoilState(FlameState.methodsAtom);

  const { pageKey } = useContext(GlobalContext);
  const inputUnfilled = useRecoilValue(
    FlowState.inputUnfilledSelectors(pageKey)
  );

  return (
    <FormControl>
      <InputLabel>{LABEL}</InputLabel>
      <Select
        label={LABEL}
        value={method}
        onChange={({ target: { value } }) => {
          if (typeof value === "string") {
            pipe(value.split(",").filter(Flame.isMethod), setMethod);
            return;
          }

          setMethod(value);
        }}
        multiple
        renderValue={(selected) =>
          selected.map((item) => Flame.MethodInfoMap[item].text).join(", ")
        }
        error={inputUnfilled}
      >
        {values(Flame.Method.enum).map((item) => (
          <MenuItem
            value={item}
            key={item}
            sx={{
              "&:hover": {
                "& .MuiCheckbox-root": {
                  color: COLORS.MAIN,
                },
              },
            }}
          >
            <Checkbox checked={method.includes(item)} sx={{ mr: 6 }} />
            {Flame.MethodInfoMap[item].text}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>
        {inputUnfilled
          ? "추옵 설정 수단을 선택해주세요."
          : "복수 선택 가능. 검환불과 영환불과 옵션 설정 확률이 같습니다."}
      </FormHelperText>
    </FormControl>
  );
};
