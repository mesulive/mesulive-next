import { Box } from "@mui/material";
import { GlobalProvider } from "~/components/common/context/GlobalProvider";
import { SettingSection } from "~/components/flame/calc/setting/SettingSection";
import { PageTitle } from "~/components/UI/atoms/typography";
import { Flex } from "~/components/UI/templates/box";
import { FLAME_PAGE_KEY } from "~/lib/flame/constants";

const Home = () => {
  return (
    <GlobalProvider pageKey={FLAME_PAGE_KEY}>
      <Flex gap={16}>
        <Box>
          <PageTitle>환생의 불꽃 기댓값 계산기</PageTitle>
        </Box>
        <SettingSection />
      </Flex>
    </GlobalProvider>
  );
};

export default Home;
