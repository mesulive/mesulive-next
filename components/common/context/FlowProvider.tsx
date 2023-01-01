import { useInterpret } from "@xstate/react";
import { createContext, ReactNode } from "react";
import { InterpreterFrom } from "xstate";
import { flowMachine, FlowMachine } from "~/lib/flow/machine";

export interface IFlowContext {
  service: InterpreterFrom<FlowMachine>;
}

export const FlowContext = createContext<IFlowContext>({} as IFlowContext);

export const FlowProvider = ({ children }: { children?: ReactNode }) => {
  const service = useInterpret(flowMachine);

  return (
    <FlowContext.Provider value={{ service }}>{children}</FlowContext.Provider>
  );
};
