import type { AppProps } from "next/app"
import { Provider as JotaiProvider } from "jotai"
import { ThemeProvider } from "next-themes"

import "@/styles/globals.css"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <JotaiProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </JotaiProvider>
  )
}

export default App
