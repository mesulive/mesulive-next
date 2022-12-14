import createCache from "@emotion/cache";
import {
  CacheProvider,
  ThemeProvider as EmotionThemeProvider,
} from "@emotion/react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Layout from "~/pages/layout";
import { theme } from "~/styles/theme";
import "../styles/globals.css";

const cache = createCache({ key: "next" });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <CacheProvider value={cache}>
        <MuiThemeProvider theme={theme}>
          <EmotionThemeProvider theme={theme}>
            <RecoilRoot>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </RecoilRoot>
          </EmotionThemeProvider>
        </MuiThemeProvider>
      </CacheProvider>
      <Analytics />
    </>
  );
};

export default App;
