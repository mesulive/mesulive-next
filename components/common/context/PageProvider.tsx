import { createContext, ReactNode } from "react";

export interface IPageContext {
  pageKey: string;
}

export const PageContext = createContext<IPageContext>({ pageKey: "" });

export const PageProvider = ({
  pageKey,
  children,
}: IPageContext & { children?: ReactNode }) => {
  return (
    <PageContext.Provider value={{ pageKey }}>{children}</PageContext.Provider>
  );
};
