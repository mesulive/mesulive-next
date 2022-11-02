import { PaletteOptions } from "@mui/material";
import { COLORS } from "~/styles/colors";

export const palette: PaletteOptions = {
  primary: {
    main: COLORS.MAIN,
    dark: COLORS.MAIN_DARK,
    light: COLORS.MAIN_LIGHT,
  },
  secondary: {
    main: COLORS.SECONDARY,
  },
  error: {
    main: COLORS.ERROR,
  },
  grey: {
    900: "#212121",
    800: "#3B3B3B",
    700: "#505050",
    600: "#757575",
    500: "#9B9B9B",
    400: "#C5C5C5",
  },
};
