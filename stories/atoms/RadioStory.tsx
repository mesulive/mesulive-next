import { FormControlLabel, Radio } from "@mui/material";

export interface RadioStoryProps {
  label?: string;
  checked?: boolean;
}

export const RadioStory = ({
  label = "라디오버튼",
  checked,
  ...props
}: RadioStoryProps) => (
  <FormControlLabel
    control={<Radio {...props} />}
    label={label}
    checked={checked}
  />
);
