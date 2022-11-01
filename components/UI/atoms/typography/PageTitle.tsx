import { styled, Typography } from "@mui/material";
import { COLORS } from "~/styles/colors";

export const PageTitle = styled(Typography)(({ theme }) => ({
  fontSize: 23,
  fontWeight: 700,
  color: COLORS.GRAY_3,

  [theme.breakpoints.up("laptop")]: {
    fontSize: 28,
  },
}));
