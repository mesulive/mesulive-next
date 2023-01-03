import { Box } from "@mui/material";
import { FlowProvider } from "~/components/common/context/FlowProvider";
import { MultiProvider } from "~/components/common/context/MultiProvider";
import { PageProvider } from "~/components/common/context/PageProvider";
import { CalcButton } from "~/components/flame/calc/CalcButton";
import { SettingSection } from "~/components/flame/calc/setting/SettingSection";
import { PageTitle } from "~/components/UI/atoms/typography";
import { Flex } from "~/components/UI/templates/box";
import { Flame } from "~/lib/flame";

const Home = () => {
  return (
    <MultiProvider
      // eslint-disable-next-line react/jsx-key
      providers={[<PageProvider pageKey={Flame.PAGE_KEY} />, <FlowProvider />]}
    >
      <Flex gap={16}>
        <Box>
          <PageTitle>환생의 불꽃 기댓값 계산기</PageTitle>
        </Box>
        <SettingSection />
        <CalcButton />
      </Flex>
    </MultiProvider>
  );
};

export default Home;
