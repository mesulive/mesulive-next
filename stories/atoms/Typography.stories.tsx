/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import { TypographyProps } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FC } from "react";
import {
  PageHelperText as PageHelperTextComponent,
  PageTitle as PageTitleComponent,
  SectionSubtitle as SectionSubtitleComponent,
  SectionTitle as SectionTitleComponent,
} from "~/components/UI/atoms/typography";
import { TypographyStory, TypographyStoryProps } from "~/stories/atoms/TypographyStory";

const meta: ComponentMeta<typeof TypographyStory> = {
  title: "Atom/Typography",
  component: TypographyStory,
};

export default meta;

const Template = ({
  Component,
  text = "타이포그래피 Typography",
  ...props
}: TypographyStoryProps & { Component: FC<TypographyProps> }) => (
  <Component {...props}>{text}</Component>
);

export const _PageTitle: ComponentStory<typeof TypographyStory> = (props) => (
  <Template Component={PageTitleComponent} {...props} />
);

export const _PageHelperText: ComponentStory<typeof TypographyStory> = (
  props
) => <Template Component={PageHelperTextComponent} {...props} />;

export const _SectionTitle: ComponentStory<typeof TypographyStory> = (
  props
) => <Template Component={SectionTitleComponent} {...props} />;

export const _SectionSubtitle: ComponentStory<typeof TypographyStory> = (
  props
) => <Template Component={SectionSubtitleComponent} {...props} />;
