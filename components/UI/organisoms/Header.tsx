import { MenuRounded } from "@mui/icons-material";
import { IconButton, useTheme } from "@mui/material";
import Logo from "~/assets/images/logo.svg";
import { Flex } from "~/components/UI/atoms/box";
import { pxArray } from "~/lib/style";
import { COLORS } from "~/styles/colors";

export const Header = () => {
  const theme = useTheme();

  return (
    <Flex
      component="header"
      align="center"
      sx={{
        p: 16,
        height: 32,
        borderBottom: `solid 1px ${COLORS.GRAY_6}`,
        boxSizing: "content-box",
        backgroundColor: "white",
        position: "sticky",
        inset: 0,

        [theme.breakpoints.up("desktop")]: {
          p: pxArray(16, 32),
        },
      }}
    >
      <IconButton
        sx={{
          color: COLORS.MAIN,
          mr: 8,

          [theme.breakpoints.up("desktop")]: {
            display: "none",
          },
        }}
      >
        <MenuRounded />
      </IconButton>
      <Logo css={{ height: 32 }} />
    </Flex>
  );
};
