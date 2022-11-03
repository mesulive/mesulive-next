import createCache from "@emotion/cache";
import {
  CacheProvider,
  ThemeProvider as EmotionThemeProvider,
} from "@emotion/react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { Layout } from "~/pages/Layout";
import { theme } from "~/styles/theme";
import "../styles/globals.css";

const cache = createCache({ key: "next" });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CacheProvider value={cache}>
      <MuiThemeProvider theme={theme}>
        <EmotionThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </EmotionThemeProvider>
      </MuiThemeProvider>
    </CacheProvider>
  );
};

export default App;
