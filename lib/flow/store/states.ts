import { atomFamily, selectorFamily, SerializableParam } from "recoil";
import {
  createFlowMachineInterpreter,
  FlowMachineInterpreter,
} from "~/lib/flow/machine";

export namespace FlowState {
  export const machineAtoms = atomFamily<
    FlowMachineInterpreter,
    SerializableParam
  >({
    key: "flow/machineAtoms",
    default: () => createFlowMachineInterpreter().start(),
  });

  export const inputUnfilledSelectors = selectorFamily<
    boolean,
    SerializableParam
  >({
    key: "flow/inputInvalidSelectors",
    get:
      (key) =>
      ({ get }) =>
        get(machineAtoms(key)).state.matches("inputUnfilled"),
  });
}
