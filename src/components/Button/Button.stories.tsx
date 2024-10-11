import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React from "react";
import { View } from "react-native";
import { MyButton } from "./Button";

const meta = {
  title: "MyButton",
  component: MyButton,
  args: {
    text: "Hello world",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof MyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    onPress: action("onPress"),
  },
};

export const Dark: Story = {
  args: {
    onPress: action("onPress"),
  },
};

Basic.parameters = {
  theme: "light",
};

Dark.parameters = {
  theme: "dark",
};
