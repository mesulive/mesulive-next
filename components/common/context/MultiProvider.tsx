import {
  cloneElement,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from "react";

const nest = (children: ReactNode, component: ReactElement) =>
  cloneElement(component, {}, children);

export type MultiProviderProps = PropsWithChildren<{
  providers: ReactElement[];
}>;

export const MultiProvider = ({ children, providers }: MultiProviderProps) => (
  <>{providers.reduceRight(nest, children)}</>
);
