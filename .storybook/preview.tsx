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
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        // The icon for the toolbar item
        icon: "circlehollow",
        // Array of options
        items: [
          { value: "light", icon: "circlehollow", title: "light" },
          { value: "dark", icon: "circle", title: "dark" },
        ],
        // Property that specifies if the name of the item will be displayed
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { theme } = context.globals;
      console.log({ theme });

      const storyTheme = theme === "dark" ? dark : core;

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
