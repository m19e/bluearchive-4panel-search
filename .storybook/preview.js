import "../src/styles/globals.css"
import * as NextImage from "next/image"

import { withConsole } from "@storybook/addon-console"
import { addDecorator } from "@storybook/react"

addDecorator((storyFn, context) => withConsole()(storyFn)(context))

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    "storybook/docs/panel": { index: -1 },
  },
}