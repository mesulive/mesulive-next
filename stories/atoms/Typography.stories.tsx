/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  PageHelperText as PageHelperTextComponent,
  PageTitle as PageTitleComponent,
  SectionSubtitle as SectionSubtitleComponent,
  SectionTitle as SectionTitleComponent,
} from '~/components/UI/atoms/typography';
import { TypographyStory } from '~/stories/atoms/TypographyStory';

const meta: ComponentMeta<typeof TypographyStory> = {
  title: "Atom/Typography",
  component: TypographyStory,
};

export default meta;

const SAMPLE_TEXT = "타이포그래피 Typography";

export const _PageTitle: ComponentStory<typeof TypographyStory> = ({
  text = SAMPLE_TEXT,
}) => <PageTitleComponent>{text}</PageTitleComponent>;

export const _PageHelperText: ComponentStory<typeof TypographyStory> = ({
  text = SAMPLE_TEXT,
}) => <PageHelperTextComponent>{text}</PageHelperTextComponent>;

export const _SectionTitle: ComponentStory<typeof TypographyStory> = ({
  text = SAMPLE_TEXT,
}) => <SectionTitleComponent>{text}</SectionTitleComponent>;

export const _SectionSubtitle: ComponentStory<typeof TypographyStory> = ({
  text = SAMPLE_TEXT,
}) => <SectionSubtitleComponent>{text}</SectionSubtitleComponent>;
