import { styled, Typography, TypographyProps } from "@mui/material";
import { COLORS } from "~/styles/colors";

export const PageTitle = styled((props: TypographyProps<"h1">) => (
  <Typography component="h1" {...props} />
))(({ theme }) => ({
  display: "inline",
  fontSize: 23,
  fontWeight: 800,
  color: COLORS.MAIN,
  background: `linear-gradient(to right, ${COLORS.MAIN}, ${COLORS.SECONDARY})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",

  [theme.breakpoints.up("laptop")]: {
    fontSize: 28,
  },
}));
