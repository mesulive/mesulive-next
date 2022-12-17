export type NavigationPath = Record<
  string,
  { path: string; disable?: boolean; externalLink?: string }[]
>;
