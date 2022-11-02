import { ThemeComponents } from "~/styles/types";

export const MuiButton: ThemeComponents["MuiButton"] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      whiteSpace: "nowrap",
      boxShadow: "none",
      borderRadius: 16,

      "&:hover, &:active": {
        boxShadow: "none",
      },
      ...(ownerState.variant === "contained" && {
        color: "white",
      }),
    }),
  },
};
