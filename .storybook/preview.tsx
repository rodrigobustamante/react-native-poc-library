import React from "react";
import { ThemeProvider } from "@shopify/restyle";
import type { Preview } from "@storybook/react";
import { core, dark } from "../src/theme";

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
    (Story, context) => {
      const { theme } = context.parameters;
      const storyTheme = theme === "dark" ? dark : core;
      console.log({ theme });

      return (
        <ThemeProvider theme={storyTheme}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
  tags: ["autodocs"],
};

export default preview;
