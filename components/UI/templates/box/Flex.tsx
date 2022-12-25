import { Box, BoxProps } from "@mui/material";
import { Property } from "csstype";
import { mergeStyles, Sx } from "~/lib/style";

export interface FlexProps extends BoxProps, Sx {
  direction?: Property.FlexDirection;
  align?: Property.AlignItems;
  justify?: Property.JustifyContent;
  gap?: Property.Gap | number;
}

export const Flex = ({
  direction = "column",
  align,
  justify,
  gap,
  sx,
  ...props
}: FlexProps) => {
  return (
    <Box
      sx={mergeStyles(
        {
          display: "flex",
          flexDirection: direction,
          alignItems: align,
          justifyContent: justify,
          gap,
        },
        sx
      )}
      {...props}
    />
  );
};
