import type { InferGetServerSidePropsType, NextPage } from "next"

import { EMPTY_GROUPED_STUDENTS } from "@/consts"
import type { PanelData, StudentData } from "@/types"
import { getAllPanels } from "@/utils"

import { Search } from "@/components/organisms/Search"
import { PanelList } from "@/components/molecules/PanelList"

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Page: NextPage<Props> = ({ panels, students }) => {
  const data = [
    { title: "ぶるーあーかいぶっ！", panels: panels.ja.reverse() },
    { title: "あおはるレコード", panels: panels.aoharu.reverse() },
    { title: "Official 4-Panel Manga", panels: panels.en.reverse() },
  ]

  return (
    <div className="flex flex-col min-h-screen font-rounded">
      <div className="flex-1 bg-triangle">
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
                <a
                  className="flex gap-3 items-center py-1 px-1.5 -my-1 -mx-1.5 text-[0.8125rem] font-extrabold leading-6 text-slate-900 hover:bg-slate-900/[0.03] rounded-lg transition"
                  href=""
                >
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="w-5 h-5 fill-slate-400"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.615 11.615 0 0 0 6.29 1.84"></path>
                  </svg>
                  <span>
                    Share
                    <span className="sr-only sm:not-sr-only"> on Twitter</span>
                  </span>
                </a>
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
            <PanelList data={data} />
          </div>
        </div>
        <Search data={students} />
        <footer className="w-full min-h-16"></footer>
      </div>
    </div>
  )
}

const getGroupedStudents = (panels: PanelData[]) => {
  const result = Object.assign({}, EMPTY_GROUPED_STUDENTS)

  const uniq = panels.reduce((prev, panel) => {
    panel.students.forEach((s) => (prev[s.id] = s))
    return prev
  }, {} as StudentData)

  Object.values(uniq).forEach((student) => {
    const { school } = student
    if (school) {
      result[school] = [...result[school], student]
    }
  })

  return result
}

export const getServerSideProps = async () => {
  const panels = await getAllPanels()
  const students = getGroupedStudents([
    ...panels.ja,
    ...panels.en,
    ...panels.aoharu,
  ])

  return {
    props: {
      panels,
      students,
    },
  }
}

export default Page
