import Link from "next/link"

import { useLocale } from "@/hooks/useLocale"

export const LangNav = () => {
  const { locale } = useLocale()

  return (
    <div className="flex gap-1 items-center text-xs font-black leading-6">
      {langs[locale]}
    </div>
  )
}

const Ja = () => {
  return (
    <>
      <span className="text-slate-600">日本語</span>
      <span className="text-slate-600/50">|</span>
      <Link href="/en" locale="en">
        <a className="text-sky-600 hover:link">English</a>
      </Link>
    </>
  )
}

const En = () => {
  return (
    <>
      <Link href="/ja" locale="ja">
        <a className="text-sky-600 hover:link">日本語</a>
      </Link>
      <span className="text-slate-600/50">|</span>
      <span className="text-slate-600">English</span>
    </>
  )
}

const langs = {
  ja: <Ja />,
  en: <En />,
}
