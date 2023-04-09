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
      <div className="flex-1">
        <div className="flex overflow-x-hidden justify-center bg-pattern">
          <div className="flex justify-end w-full max-w-screen-lg">
            <div className="flex-1">
              <div className="overflow-x-hidden -mr-6 ml-10 h-full bg-white border-r-4 border-l-[2rem] border-sky-600/50 -skew-x-[30deg]">
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
      </div>
      <div className="w-full bg-neutral/75 min-h-16"></div>
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
