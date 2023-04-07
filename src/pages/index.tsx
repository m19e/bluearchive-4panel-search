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
    <div className="space-y-4 min-h-screen bg-pattern">
      <Search data={students} />
      <div className="flex justify-center w-full">
        <PanelList data={data} />
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
