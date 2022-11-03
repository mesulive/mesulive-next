import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import { Header } from "~/components/UI/organisoms/Header";
import { COLORS } from "~/styles/colors";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Box sx={{ backgroundColor: COLORS.BACKGROUND }}>{children}</Box>
    </>
  );
};
