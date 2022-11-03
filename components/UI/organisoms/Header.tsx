import { MenuRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Logo from "~/assets/images/logo.svg";
import { Flex } from "~/components/UI/atoms/box";
import { COLORS } from "~/styles/colors";

export const Header = () => {
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
      }}
    >
      <IconButton sx={{ color: COLORS.MAIN, mr: 8 }}>
        <MenuRounded />
      </IconButton>
      <Logo css={{ height: 32 }} />
    </Flex>
  );
};
