import { Checkbox, FormControlLabel } from "@mui/material";

export interface CheckboxStoryProps {
  checked?: boolean;
  label?: string;
}

export const CheckboxStory = ({
  label = "체크박스",
  ...props
}: CheckboxStoryProps) => (
  <FormControlLabel control={<Checkbox {...props} />} label={label} />
);
