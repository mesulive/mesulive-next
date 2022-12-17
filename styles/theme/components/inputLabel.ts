import { COLORS } from "~/styles/colors";
import { INPUT_PADDING } from "~/styles/constants";
import { ThemeComponents } from "~/styles/types";

export const MuiInputLabel: ThemeComponents["MuiInputLabel"] = {
  styleOverrides: {
    root: () => ({
      fontSize: 14,
      fontWeight: 700,
      color: COLORS.GRAY_3,
    }),
    outlined: () => ({
      transform: `translate(${INPUT_PADDING}px, ${INPUT_PADDING}px) scale(1)`,
      "&.MuiInputLabel-shrink": {
        transform: `translate(${INPUT_PADDING}px, ${
          -(20 * 0.8) / 2
        }px) scale(0.8)`,
      },
    }),
    shrink: () => ({
      fontWeight: 700,
    }),
  },
};
