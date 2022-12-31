export const values = <T extends object = object>(obj: T) =>
  Object.values(obj) as (keyof T)[];
