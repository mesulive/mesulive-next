import { ThemeComponents } from "~/styles/types";

export const MuiFormGroup: ThemeComponents["MuiFormGroup"] = {
  styleOverrides: {
    root: () => ({
      "& .MuiFormControlLabel-root": {
        "&:not(:first-of-type)": {
          marginTop: 8,
        },
      },
    }),
  },
};
