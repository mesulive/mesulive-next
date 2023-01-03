import { useContext } from "react";
import { FlowContext } from "~/components/common/context/FlowProvider";
import { MainButton } from "~/components/UI/atoms/button";
import { FlameState } from "~/lib/flame/store/states";
import { useRecoilCallback } from "~/lib/hooks/recoil";

export const CalcButton = () => {
  const flowService = useContext(FlowContext).service;
  const validate = useRecoilCallback(
    ({ get }) =>
      () =>
        get(FlameState.inputUnfilledSelector),
    []
  );

  return (
    <MainButton
      variant="contained"
      onClick={() => {
        flowService.send({ type: "SUBMIT", invalid: validate() });
      }}
    >
      계산하기
    </MainButton>
  );
};
