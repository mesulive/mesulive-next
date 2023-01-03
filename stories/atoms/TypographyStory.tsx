import { Typography } from "@mui/material";

export interface TypographyStoryProps {
  text?: string;
}

export const TypographyStory = ({
  text = "타이포그래피 Typography",
}: TypographyStoryProps) => <Typography>{text}</Typography>;
