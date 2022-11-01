import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
  TextFieldStory,
  TextFieldStoryProps,
} from "~/stories/atoms/TextFieldStory";

export default {
  title: "Atom/TextField",
  component: TextFieldStory,
} as ComponentMeta<typeof TextFieldStory>;

const Template = (props: TextFieldStoryProps) => <TextFieldStory {...props} />;

export const Default: ComponentStory<typeof TextFieldStory> = (props) => (
  <Template {...props} />
);
