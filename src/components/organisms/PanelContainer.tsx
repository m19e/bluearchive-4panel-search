import Link from "next/link"

import { usePanels } from "@/hooks"
import { useLocale } from "@/hooks/useLocale"

import { Language } from "@/components/molecules/LangNav"
import { PanelList } from "@/components/molecules/PanelList"

const createShareURL = (locale: string) =>
  `https://twitter.com/intent/tweet?text=${encodeURIComponent(`#ブルアカ4コマ検索
#BlueArchive4PanelSearch
${process.env.NEXT_PUBLIC_SITE_ROOT_URL + locale}`)}`

export const PanelContainer = () => {
  const { t, locale } = useLocale()
  const { data, result } = usePanels()
  const noResult = result.OR.length === 0
  const resultData = [{ title: t.SEARCH_RESULT, panels: result.OR }]

  return (
    <div className="flex justify-center overflow-x-hidden">
      <div className="relative flex w-full max-w-screen-lg justify-end">
        <div className="absolute top-0 z-10 flex w-full md:justify-end md:px-4">
          <header className="min-h-8 flex w-full flex-col bg-sky-50 p-2 shadow-md sm:flex-row sm:items-center sm:justify-between sm:py-0 md:w-auto md:rounded-b-md md:px-4">
            <Link href="/" locale="ja">
              <a className="flex cursor-pointer font-black sm:text-xl md:hidden">
                <p className="whitespace-pre-line">
                  <span className="text-kivotos">B</span>lue Archive
                  <span className="text-kivotos"> 4</span>-Panel
                  <span className="text-kivotos"> S</span>earch
                </p>
              </a>
            </Link>
            <div className="flex items-center justify-end gap-2 sm:justify-start">
              <Language />
              <span className="text-slate-600/50">/</span>
              <a
                className="-mx-1.5 -my-1 flex items-center gap-2 rounded-lg px-1.5 py-1 text-[0.8125rem] font-extrabold leading-6 text-slate-900"
                href={createShareURL(locale)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="h-5 w-5 fill-slate-400"
                >
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.615 11.615 0 0 0 6.29 1.84"></path>
                </svg>
                <span className="sr-only text-xs sm:not-sr-only">
                  {t.SHARE}
                </span>
              </a>
            </div>
          </header>
        </div>
        <div className="flex-1">
          <div className="-mr-6 ml-10 h-full -skew-x-[30deg] overflow-x-hidden border-l-[2rem] border-r-4 border-sky-600/50 bg-sky-50">
            <div className="flex h-full flex-col items-center justify-center font-black">
              <Link href="/" locale="ja">
                <a className="hidden cursor-pointer md:block md:text-4xl lg:text-5xl">
                  <p className="skew-x-[30deg]">
                    <span className="text-kivotos">B</span>lue Archive
                  </p>
                  <p className="skew-x-[30deg]">
                    <span className="text-kivotos">4</span>-Panel
                  </p>
                  <p className="skew-x-[30deg]">
                    <span className="text-kivotos">S</span>earch
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <PanelList data={noResult ? data : resultData} />
      </div>
    </div>
  )
}
