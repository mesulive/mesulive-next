import { TextField, TextFieldProps } from "@mui/material";

export type NumberTextFieldProps = Omit<TextFieldProps, "type">;

export const NumberTextField = ({
  onKeyDown,
  ...restProps
}: NumberTextFieldProps) => (
  <TextField
    type="number"
    onKeyDown={(event) => {
      if (["e", "E", "+", "-"].includes(event.key)) {
        event.preventDefault();
      }
      onKeyDown?.(event);
    }}
    {...restProps}
  />
);
