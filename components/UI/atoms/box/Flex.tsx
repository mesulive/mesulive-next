import { Box, BoxProps } from "@mui/material";
import { Property } from "csstype";
import { mergeStyles, Sx } from "~/lib/style";

interface Props extends BoxProps, Sx {
  direction?: Property.FlexDirection;
  align?: Property.AlignItems;
  justify?: Property.JustifyContent;
}

export const Flex = ({ direction, align, justify, sx, ...props }: Props) => {
  return (
    <Box
      sx={mergeStyles(
        {
          display: "flex",
          flexDirection: direction,
          alignItems: align,
          justifyContent: justify,
        },
        sx
      )}
      {...props}
    />
  );
};
