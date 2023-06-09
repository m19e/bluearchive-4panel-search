import type { AppProps } from "next/app"
import { Analytics } from "@vercel/analytics/react"
import { Provider as JotaiProvider } from "jotai"
import { ThemeProvider } from "next-themes"

import { usePageView } from "@/hooks/usePageView"

import "@/styles/globals.css"

const App = ({ Component, pageProps }: AppProps) => {
  usePageView()

  return (
    <>
      <JotaiProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </JotaiProvider>
      <Analytics />
    </>
  )
}

export default App
