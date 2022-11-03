import { SxProps, Theme } from "@mui/material";
import { Properties, Property } from "csstype";
import { of } from "~/lib/types";

export const cssObject = of<Properties>;

export const color = of<Property.Color>;

export type SxEntity = Exclude<SxProps<Theme>, (...args: never[]) => unknown>;

export const sx = of<SxEntity>;

export type WithSx<T extends object> = { sx?: SxEntity } & T;

export function mergeStyles(
  ...styles: (SxEntity | boolean | undefined)[]
): SxEntity {
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

export enum ScreenType {
  mobile,
  tablet,
  laptop,
  desktop,
}
