import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SectionBoxStory } from "~/stories/templates/SectionBoxStory";

export default {
  title: "Templates/SectionBox",
  component: SectionBoxStory,
} as ComponentMeta<typeof SectionBoxStory>;

export const Default: ComponentStory<typeof SectionBoxStory> = () => (
  <SectionBoxStory />
);
