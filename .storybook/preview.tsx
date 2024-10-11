import React from "react";
import { ThemeProvider } from "@shopify/restyle";
import type { Preview } from "@storybook/react";
import { core } from "../src/theme";

const preview: Preview = {
  parameters: {
    // actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={core}>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
};

export default preview;
