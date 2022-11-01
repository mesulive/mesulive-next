import { Typography } from "@mui/material";

export interface TypographyStoryProps {
  text?: string;
}

export const TypographyStory = ({ text }: TypographyStoryProps) => (
  <Typography>{text}</Typography>
);
