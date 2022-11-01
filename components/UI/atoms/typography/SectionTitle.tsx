import { styled, Typography } from "@mui/material";
import { COLORS } from "~/styles/colors";

export const SectionTitle = styled(Typography)(({ theme }) => ({
  color: COLORS.MAIN,
  fontWeight: 700,
  fontSize: 16,

  [theme.breakpoints.up("laptop")]: {
    fontSize: 18,
  },
}));
