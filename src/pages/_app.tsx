import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import "@/styles/globals.css"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
