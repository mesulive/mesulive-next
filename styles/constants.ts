export const DEFAULT_FONT_FAMILY =
  "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif";

export const INPUT_PADDING = 12;

export enum ScreenType {
  mobile,
  tablet,
  laptop,
  desktop,
}

export const BREAKPOINTS: Record<ScreenType, number> = {
  [ScreenType.mobile]: 0,
  [ScreenType.tablet]: 768,
  [ScreenType.laptop]: 900,
  [ScreenType.desktop]: 1440,
};
