import { createContext, ReactNode } from "react";

export interface IGlobalContext {
  pageKey: string;
}

export const GlobalContext = createContext<IGlobalContext>({pageKey: ""});

export const GlobalProvider = ({pageKey, children}: IGlobalContext & { children: ReactNode }) =>
  <GlobalContext.Provider value={{pageKey}}>
    {children}
  </GlobalContext.Provider>