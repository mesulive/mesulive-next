import { Button } from "@mui/material";

export interface ButtonStoryProps {
  text?: string;
}

export const ButtonStory = ({ text, ...props }: ButtonStoryProps) => (
  <Button {...props}>{text}</Button>
);
