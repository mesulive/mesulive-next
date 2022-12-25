import { Box } from "@mui/material";
import {
  SectionSubtitle,
  SectionTitle,
} from "~/components/UI/atoms/typography";
import { SectionBox } from "~/components/UI/templates/box";

export const SectionBoxStory = () => (
  <SectionBox gap={16}>
    <SectionTitle>섹션 타이틀</SectionTitle>
    <SectionSubtitle>섹션 서브 타이틀</SectionSubtitle>
    <Box>
      내용
      <br />
      내용
      <br />
      내용
      <br />
      내용
      <br />
      내용
    </Box>
  </SectionBox>
);
