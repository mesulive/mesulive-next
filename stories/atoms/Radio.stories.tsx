import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RadioStory, RadioStoryProps } from "~/stories/atoms/RadioStory";

const meta: ComponentMeta<typeof RadioStory> = {
  title: "Atom/RadioButton/Radio",
  component: RadioStory,
};

export default meta;

const Template = (props: RadioStoryProps) => <RadioStory {...props} />;

export const Default: ComponentStory<typeof RadioStory> = (props) => (
  <Template {...props} />
);
