import {
  Checkbox,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useSelector } from "@xstate/react";
import { pipe } from "fp-ts/function";
import { useContext, useMemo } from "react";
import { useRecoilState } from "recoil";
import { FlowContext } from "~/components/common/context/FlowProvider";
import { FlameState } from "~/lib/flame/store/states";
import { Flame } from "~/lib/flame/types";
import { values } from "~/lib/object";
import { COLORS } from "~/styles/colors";

const LABEL = "추가옵션 설정 수단";

export const MethodSelect = () => {
  const [methods, setMethods] = useRecoilState(FlameState.methodsAtom);

  const inputUnfilledState = useSelector(
    useContext(FlowContext).service,
    (state) => state.matches("inputUnfilled")
  );

  const inputUnfilled = useMemo(
    () => inputUnfilledState && !methods.length,
    [inputUnfilledState, methods]
  );

  return (
    <FormControl error={inputUnfilled}>
      <InputLabel>{LABEL}</InputLabel>
      <Select
        label={LABEL}
        value={methods}
        onChange={({ target: { value } }) => {
          if (typeof value === "string") {
            pipe(value.split(",").filter(Flame.isMethod), setMethods);
            return;
          }

          setMethods(value);
        }}
        multiple
        renderValue={(selected) =>
          selected.map((item) => Flame.MethodInfoMap[item].text).join(", ")
        }
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
            <Checkbox checked={methods.includes(item)} sx={{ mr: 6 }} />
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
