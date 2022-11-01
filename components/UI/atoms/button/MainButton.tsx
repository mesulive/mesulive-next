import { Button, styled } from "@mui/material";

export const MainButton = styled(Button)({
  height: 60,
  fontWeight: "bold",
  fontSize: 16,
  borderWidth: 2,
  "&:hover, &:active": {
    borderWidth: 2,
  },
});
