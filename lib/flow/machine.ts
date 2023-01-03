import { createMachine } from "xstate";
import { z } from "zod";

type SUBMIT = { type: "SUBMIT"; invalid?: boolean; needLoading?: boolean };
type FINISH_CALC = { type: "FINISH_CALC" };

export type FlowMachineEvent = SUBMIT | FINISH_CALC;

export const FlowMachineState = z.enum([
  "idle",
  "inputUnfilled",
  "calculating",
  "hasResult",
]);

export type FlowMachineState = z.infer<typeof FlowMachineState>;

export interface FlowMachineContext {}

export const flowMachine = createMachine<FlowMachineContext, FlowMachineEvent>({
  id: "console",
  initial: "idle",
  states: {
    [FlowMachineState.enum.idle]: {
      on: {
        SUBMIT: [
          {
            target: "inputUnfilled",
            cond: (context, { invalid }) => !!invalid,
          },
          {
            target: "calculating",
            cond: (context, { needLoading }) => !!needLoading,
          },
          {
            target: "hasResult",
          },
        ],
      },
    },
    [FlowMachineState.enum.inputUnfilled]: {
      on: {
        SUBMIT: [
          {
            target: "inputUnfilled",
            cond: (context, { invalid }) => !!invalid,
          },
          {
            target: "calculating",
            cond: (context, { needLoading }) => !!needLoading,
          },
          {
            target: "hasResult",
          },
        ],
      },
    },
    [FlowMachineState.enum.calculating]: {
      on: {
        FINISH_CALC: {
          target: "hasResult",
        },
      },
    },
    [FlowMachineState.enum.hasResult]: {
      on: {
        SUBMIT: [
          {
            target: "inputUnfilled",
            cond: (context, { invalid }) => !!invalid,
          },
          {
            target: "calculating",
            cond: (context, { needLoading }) => !!needLoading,
          },
          {
            target: "hasResult",
          },
        ],
      },
    },
  },
});

export type FlowMachine = typeof flowMachine;
