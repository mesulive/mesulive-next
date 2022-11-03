import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";
import { RecoilRoot } from "recoil";
import { theme } from "~/styles/theme";

export const TestProvider = ({ children }: { children: ReactNode }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <RecoilRoot>{children}</RecoilRoot>
      </EmotionThemeProvider>
    </MuiThemeProvider>
  );
};
