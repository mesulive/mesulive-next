import { InputAdornment, TextField } from "@mui/material";
import { NumberTextField } from "~/components/UI/atoms/textField";

export interface TextFieldStoryProps {
  value?: string;
  label?: string;
  helperText?: string;
  startAdornment?: string;
  endAdornment?: string;
  error?: boolean;
  type?: "number";
}

export const TextFieldStory = ({
  value,
  label,
  helperText = "\u00a0",
  startAdornment = "상위",
  endAdornment = "메소",
  error,
}: TextFieldStoryProps) => (
  <TextField
    value={value}
    label={label}
    helperText={helperText}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">{startAdornment}</InputAdornment>
      ),
      endAdornment: (
        <InputAdornment position="end">{endAdornment}</InputAdornment>
      ),
    }}
    error={error}
  />
);

export const NumberTextFieldStory = ({
  value,
  label,
  helperText = "\u00a0",
  startAdornment = "상위",
  endAdornment = "메소",
  error,
}: TextFieldStoryProps) => (
  <NumberTextField
    value={value}
    label={label}
    helperText={helperText}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">{startAdornment}</InputAdornment>
      ),
      endAdornment: (
        <InputAdornment position="end">{endAdornment}</InputAdornment>
      ),
    }}
    error={error}
  />
);
