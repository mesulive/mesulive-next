import { Typography } from "@mui/material";
import { LinkProps } from "next/dist/client/link";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useCallback } from "react";
import { Flex } from "~/components/UI/atoms/box";
import { mergeStyles, pxArray, Sx } from "~/lib/style";
import { COLORS } from "~/styles/colors";

interface Props extends Sx, Pick<LinkProps, "href"> {
  children?: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
  externalLink?: string;
}

export const NavLink = ({
  sx,
  href,
  children,
  disabled,
  icon,
  externalLink,
}: Props) => {
  const { pathname } = useRouter();

  const UI = useCallback(
    () => (
      <Flex
        direction={"row"}
        align={"center"}
        sx={mergeStyles(
          {
            boxSizing: "border-box",
            width: 216,
            height: 40,
            p: pxArray(10, 16),

            ...(pathname === href && {
              color: COLORS.MAIN,
            }),
          },
          sx
        )}
      >
        {icon}
        <Typography sx={mergeStyles({ fontWeight: "bold", fontSize: 14 }, sx)}>
          {children}
        </Typography>
      </Flex>
    ),
    [children, href, icon, pathname, sx]
  );

  if (externalLink !== undefined) {
    return (
      <a href={externalLink} css={{ textDecoration: "none" }}>
        <UI />
      </a>
    );
  }

  return (
    <Link
      href={href}
      css={{
        ...(disabled && {
          pointerEvents: "none",
        }),
      }}
    >
      <UI />
    </Link>
  );
};
