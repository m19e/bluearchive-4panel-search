import { useRouter } from "next/router"
import en from "@/consts/locales/en"
import ja from "@/consts/locales/ja"

export const useLocale = () => {
  const { locale } = useRouter()
  const t = locale === "en" ? en : ja
  return { locale, t }
}
