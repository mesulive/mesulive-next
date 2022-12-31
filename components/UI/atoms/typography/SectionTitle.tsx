import { styled, Typography, TypographyProps } from "@mui/material";
import { COLORS } from "~/styles/colors";

export const SectionTitle = styled((props: TypographyProps<"h2">) => (
  <Typography component="h2" {...props} />
))(({ theme }) => ({
  color: COLORS.MAIN,
  fontWeight: 700,
  fontSize: 16,

  [theme.breakpoints.up("laptop")]: {
    fontSize: 18,
  },
}));
