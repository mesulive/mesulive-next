import { theme as muiTheme } from "../styles/theme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <EmotionThemeProvider theme={muiTheme}>
          <RecoilRoot>
            <Story />
          </RecoilRoot>
        </EmotionThemeProvider>
      </MuiThemeProvider>
    );
  },
];
