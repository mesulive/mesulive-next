import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export interface SelectStoryProps {
  label?: string;
  open?: boolean;
}

export const SelectStory = ({
  label = "라벨입니다",
  open,
}: SelectStoryProps) => {
  const items = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ].map((item) => ({ value: item, text: item }));

  const [selected, setSelected] = useState("Oliver Hansen");

  return (
    <FormControl fullWidth>
      {label !== undefined && <InputLabel>{label}</InputLabel>}
      <Select
        open={open}
        label={label}
        value={selected}
        onChange={({ target: { value } }) => setSelected(value)}
      >
        {items.map(({ value, text }) => (
          <MenuItem key={value} value={value}>
            {text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
