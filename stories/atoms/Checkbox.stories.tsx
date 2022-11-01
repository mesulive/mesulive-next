import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
  CheckboxStory,
  CheckboxStoryProps,
} from "~/stories/atoms/CheckboxStory";

const meta: ComponentMeta<typeof CheckboxStory> = {
  title: "Atom/Checkbox",
  component: CheckboxStory,
};

export default meta;

const Template = (props: CheckboxStoryProps) => <CheckboxStory {...props} />;

export const Default: ComponentStory<typeof CheckboxStory> = (props) => (
  <Template {...props} />
);
