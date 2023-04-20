import { useRouter } from "next/router"
import en from "@/consts/locales/en"
import ja from "@/consts/locales/ja"

export const useLocale = () => {
  const { locale: lcl } = useRouter()
  const t = lcl === "en" ? en : ja
  const locale = lcl === "en" ? "en" : "ja"
  return { locale, t }
}
