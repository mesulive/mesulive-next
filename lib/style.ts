import { SxProps, Theme } from "@mui/material";
import { Properties, Property } from "csstype";
import { of } from "~/lib/types";
import { BREAKPOINTS, ScreenType } from "~/styles/constants";

export const cssObject = of<Properties>;

export const color = of<Property.Color>;

export const sx = of<SxProps<Theme>>;

export type Sx = { sx?: SxProps<Theme> };

export function mergeStyles(
  ...styles: (SxProps<Theme> | boolean | undefined)[]
): SxProps<Theme> {
  return styles.flatMap((s) => {
    if (s) {
      return Array.isArray(s) ? s : [s];
    }
    return {};
  });
}

export const pxArray = (...arr: number[]): Property.Padding =>
  arr
    .slice(0, 4)
    .map((px) => `${px}px`)
    .join(" ");

export const getScreenType = (width: number): ScreenType => {
  if (width < BREAKPOINTS[ScreenType.tablet]) return ScreenType.mobile;
  if (width < BREAKPOINTS[ScreenType.laptop]) return ScreenType.tablet;
  if (width < BREAKPOINTS[ScreenType.desktop]) return ScreenType.laptop;
  return ScreenType.desktop;
};
