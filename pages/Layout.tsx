import { PropsWithChildren } from "react";
import { Header } from "~/components/UI/organisoms/Header";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
