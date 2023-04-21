import Link from "next/link"

import { usePanels } from "@/hooks"
import { useLocale } from "@/hooks/useLocale"

import { LangNav } from "@/components/molecules/LangNav"
import { PanelList } from "@/components/molecules/PanelList"

export const PanelContainer = () => {
  const { t } = useLocale()
  const { data, result } = usePanels()
  const noResult = result.OR.length === 0
  const resultData = [{ title: t.SEARCH_RESULT, panels: result.OR }]

  return (
    <div className="flex overflow-x-hidden justify-center">
      <div className="flex relative justify-end w-full max-w-screen-lg">
        <div className="flex absolute top-0 z-10 px-4 w-full md:justify-end">
          <header className="flex justify-between items-center px-4 w-full h-8 bg-sky-50 rounded-b-md shadow-md md:w-auto">
            <Link href="/" locale="ja">
              <a className="flex gap-1 text-lg font-black cursor-pointer sm:text-xl md:hidden">
                <p>
                  <span className="text-kivotos">B</span>lue Archive
                </p>
                <p>
                  <span className="text-kivotos">4</span>-Panel
                </p>
                <p>
                  <span className="text-kivotos">S</span>earch
                </p>
              </a>
            </Link>
            <div className="flex gap-2 items-center">
              <LangNav />
              <span className="text-slate-600/50">/</span>
              <a
                className="flex gap-2 items-center py-1 px-1.5 -my-1 -mx-1.5 text-[0.8125rem] font-extrabold leading-6 text-slate-900 rounded-lg"
                href=""
              >
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="w-5 h-5 fill-slate-400"
                >
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.615 11.615 0 0 0 6.29 1.84"></path>
                </svg>
                <span className="sr-only sm:not-sr-only">{t.SHARE}</span>
              </a>
            </div>
          </header>
        </div>
        <div className="flex-1">
          <div className="overflow-x-hidden -mr-6 ml-10 h-full bg-sky-50 border-r-4 border-l-[2rem] border-sky-600/50 -skew-x-[30deg]">
            <div className="flex flex-col justify-center items-center h-full font-black">
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
