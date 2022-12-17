import { ButtonProps as MuiButtonProps, Stack } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FC } from "react";
import { MainButton, OptionButton } from "~/components/UI/atoms/button";
import { Sx } from "~/lib/style";
import { ButtonStory, ButtonStoryProps } from "~/stories/atoms/ButtonStory";

const meta: ComponentMeta<typeof ButtonStory> = {
  title: "Atom/Button",
  component: ButtonStory,
};

export default meta;

const Template = ({
  ButtonProps,
  text = "버튼",
  sx,
  ...args
}: ButtonStoryProps &
  Sx & {
    ButtonProps: {
      Component: FC<MuiButtonProps>;
    } & MuiButtonProps;
  }) => {
  const variants: MuiButtonProps["variant"][] = [
    "contained",
    "outlined",
    "text",
  ];

  return (
    <Stack spacing={16} sx={sx}>
      {variants.map((variant) => (
        <Stack
          key={variant}
          direction="row"
          sx={{ width: "100%" }}
          spacing={16}
        >
          {[false, true].map((disabled) => (
            <ButtonProps.Component
              {...ButtonProps}
              {...args}
              variant={variant}
              disabled={disabled}
              key={`${disabled}`}
            >
              {text}
            </ButtonProps.Component>
          ))}
        </Stack>
      ))}
    </Stack>
  );
};

export const Main: ComponentStory<typeof ButtonStory> = ({ ...props }) => (
  <Template
    ButtonProps={{
      Component: MainButton,
      sx: {
        flex: 1,
      },
    }}
    {...props}
  />
);

export const Option: ComponentStory<typeof ButtonStory> = ({ ...props }) => (
  <Template
    ButtonProps={{
      Component: OptionButton,
    }}
    {...props}
  />
);
