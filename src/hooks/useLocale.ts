import { useRouter } from "next/router"
import type { Lang } from "@/types"
import en from "@/consts/locales/en"
import ja from "@/consts/locales/ja"

export const useLocale = () => {
  const { locale: lcl } = useRouter()
  const isEn = lcl === "en"

  const t = isEn ? en : ja
  const locale: Lang = isEn ? "en" : "ja"
  return { locale, t }
}
