import { theme as muiTheme } from "../styles/theme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

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
    console.log(muiTheme);
    return (
      <MuiThemeProvider theme={muiTheme}>
        <EmotionThemeProvider theme={muiTheme}>
          <Story />
        </EmotionThemeProvider>
      </MuiThemeProvider>
    );
  },
];
