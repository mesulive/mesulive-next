import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export interface SelectStoryProps {
  label?: string;
  open?: boolean;
  multiple?: boolean;
}

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

export const SelectStory = ({
  label = "라벨입니다",
  open,
  multiple = false,
}: SelectStoryProps) => {
  const [selected, setSelected] = useState("Oliver Hansen");
  const [multipleSelected, setMultipleSelected] = useState<string[]>([]);

  return (
    <FormControl fullWidth>
      {label !== undefined && <InputLabel>{label}</InputLabel>}
      <Select
        open={open}
        label={label}
        value={multiple ? multipleSelected : selected}
        onChange={({ target: { value } }) => {
          if (typeof value === "string") {
            if (multiple) setMultipleSelected(value.split(","));
            else setSelected(value);
          } else {
            setMultipleSelected(value);
          }
        }}
        multiple={multiple}
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
