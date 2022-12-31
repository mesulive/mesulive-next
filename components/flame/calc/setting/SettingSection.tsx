import { Box } from "@mui/material";
import { EquipLevelInput } from "~/components/flame/calc/setting/EquipLevelInput";
import { EquipTypeSelect } from "~/components/flame/calc/setting/EquipTypeSelect";
import { MethodSelect } from "~/components/flame/calc/setting/MethodSelect";
import { WeaponTypeSelect } from "~/components/flame/calc/setting/WeaponTypeSelect";
import { SectionTitle } from "~/components/UI/atoms/typography";
import { SectionBox } from "~/components/UI/templates/box";
import { sx } from "~/lib/style";

export const SettingSection = () => {
  return (
    <SectionBox gap={16}>
      <SectionTitle>설정</SectionTitle>
      <Box sx={styles.inputContainer}>
        <EquipTypeSelect />
        <WeaponTypeSelect />
        <MethodSelect />
        <EquipLevelInput />
      </Box>
    </SectionBox>
  );
};

const styles = {
  inputContainer: sx({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 16,
  }),
  weaponTypeSelect: sx({
    gridColumn: "2 / 3",
  }),
};
