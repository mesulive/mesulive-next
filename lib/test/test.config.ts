import {
  render,
  renderHook,
  RenderHookOptions,
  RenderOptions,
} from "@testing-library/react";
import { ReactElement } from "react";
import { TestProvider } from "~/components/test/TestProvider";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: TestProvider, ...options });

const customRenderHook = <Props, Result>(
  hook: (initialProps: Props) => Result,
  options?: Omit<RenderHookOptions<Props>, "wrapper">
) => renderHook<Result, Props>(hook, { wrapper: TestProvider, ...options });

export { customRender as render };
export { customRenderHook as renderHook };
