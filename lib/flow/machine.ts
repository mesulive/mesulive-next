import { pipe } from "fp-ts/function";
import { createMachine, interpret } from "xstate";

type SUBMIT = { type: "SUBMIT"; invalid?: boolean; needLoading?: boolean };
type FINISH_CALC = { type: "FINISH_CALC" };

export type FlowMachineEvent = SUBMIT | FINISH_CALC;

export interface FlowMachineContext {}

export const createFlowMachineInterpreter = () =>
  pipe(
    createMachine<FlowMachineContext, FlowMachineEvent>({
      id: "console",
      initial: "idle",
      context: {},
      states: {
        idle: {
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
        inputUnfilled: {
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
        calculating: {
          on: {
            FINISH_CALC: {
              target: "hasResult",
            },
          },
        },
        hasResult: {
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
    }),
    interpret
  );

export type FlowMachineInterpreter = ReturnType<
  typeof createFlowMachineInterpreter
>;
