import { SxProps, Theme } from "@mui/material";
import { Properties, Property } from "csstype";
import { of } from "~/lib/types";

export const cssObject = of<Properties>;
export const color = of<Property.Color>;
export type WithSx<T extends object> = { sx?: SxProps<Theme> } & T;
export const pxArray = (...arr: number[]): Property.Padding =>
  arr
    .slice(0, 4)
    .map((px) => `${px}px`)
    .join(" ");

export enum ScreenType {
  mobile,
  tablet,
  laptop,
  desktop,
}
