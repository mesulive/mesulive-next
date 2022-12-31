/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  PageHelperText as PageHelperTextComponent,
  PageTitle as PageTitleComponent,
  SectionSubtitle as SectionSubtitleComponent,
} from '~/components/UI/atoms/typography';
import { TypographyStory } from '~/stories/atoms/TypographyStory';

const meta: ComponentMeta<typeof TypographyStory> = {
  title: "Atom/Typography",
  component: TypographyStory,
};

export default meta;

export const _PageTitle: ComponentStory<typeof TypographyStory> = ({
  text,
}) => <PageTitleComponent>{text}</PageTitleComponent>;

export const _PageHelperText: ComponentStory<typeof TypographyStory> = ({
  text,
}) => <PageHelperTextComponent>{text}</PageHelperTextComponent>;

export const _SectionTitle: ComponentStory<typeof TypographyStory> = ({
  text,
}) => <SectionSubtitleComponent>{text}</SectionSubtitleComponent>;

export const SectionSubtitle: ComponentStory<typeof TypographyStory> = ({
  text,
}) => <SectionSubtitleComponent>{text}</SectionSubtitleComponent>;
