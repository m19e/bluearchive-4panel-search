import { usePanels } from "@/hooks"

import { PanelList } from "@/components//molecules/PanelList"

export const PanelContainer = () => {
  const { data, result } = usePanels()
  const noResult = result.OR.length === 0
  const resultData = [{ title: "検索結果", panels: result.OR }]

  return (
    <div className="flex overflow-x-hidden justify-center">
      <div className="flex relative justify-end w-full max-w-screen-lg">
        <div className="flex absolute top-0 z-10 px-4 w-full md:justify-end">
          <header className="flex justify-between items-center px-4 w-full h-8 bg-sky-50 rounded-b-md shadow-md md:w-auto">
            <div className="flex gap-1 text-lg font-black sm:text-xl md:hidden">
              <p>
                <span className="text-kivotos">B</span>lue Archive
              </p>
              <p>
                <span className="text-kivotos">4</span>-Panel
              </p>
              <p>
                <span className="text-kivotos">S</span>earch
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <a
                className="flex gap-3 items-center py-1 px-1.5 -my-1 -mx-1.5 text-[0.8125rem] font-extrabold leading-6 text-slate-900 rounded-lg"
                href=""
              >
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="w-5 h-5 fill-slate-400"
                >
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.615 11.615 0 0 0 6.29 1.84"></path>
                </svg>

                <span className="sr-only sm:not-sr-only">Share on Twitter</span>
              </a>
              <span className="text-slate-600/50">/</span>
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-5 h-5 fill-slate-500"
                >
                  <path d="M7.75 2.75a.75.75 0 00-1.5 0v1.258a32.987 32.987 0 00-3.599.278.75.75 0 10.198 1.487A31.545 31.545 0 018.7 5.545 19.381 19.381 0 017 9.56a19.418 19.418 0 01-1.002-2.05.75.75 0 00-1.384.577 20.935 20.935 0 001.492 2.91 19.613 19.613 0 01-3.828 4.154.75.75 0 10.945 1.164A21.116 21.116 0 007 12.331c.095.132.192.262.29.391a.75.75 0 001.194-.91c-.204-.266-.4-.538-.59-.815a20.888 20.888 0 002.333-5.332c.31.031.618.068.924.108a.75.75 0 00.198-1.487 32.832 32.832 0 00-3.599-.278V2.75z" />
                  <path
                    fillRule="evenodd"
                    d="M13 8a.75.75 0 01.671.415l4.25 8.5a.75.75 0 11-1.342.67L15.787 16h-5.573l-.793 1.585a.75.75 0 11-1.342-.67l4.25-8.5A.75.75 0 0113 8zm2.037 6.5L13 10.427 10.964 14.5h4.073z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="flex gap-1 text-xs font-black leading-6">
                  <span className="text-slate-600">日本語</span>
                  <span className="text-slate-600/50">|</span>
                  <a className="text-sky-600 link">English</a>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="flex-1">
          <div className="overflow-x-hidden -mr-6 ml-10 h-full bg-sky-50 border-r-4 border-l-[2rem] border-sky-600/50 -skew-x-[30deg]">
            <div className="flex flex-col justify-center items-center h-full font-black">
              <div className="hidden md:block md:text-4xl lg:text-5xl">
                <p className="skew-x-[30deg]">
                  <span className="text-kivotos">B</span>lue Archive
                </p>
                <p className="skew-x-[30deg]">
                  <span className="text-kivotos">4</span>-Panel
                </p>
                <p className="skew-x-[30deg]">
                  <span className="text-kivotos">S</span>earch
                </p>
              </div>
            </div>
          </div>
        </div>
        <PanelList data={noResult ? data : resultData} />
      </div>
    </div>
  )
}
