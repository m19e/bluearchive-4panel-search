import type { InferGetServerSidePropsType, NextPage } from "next"

import { EMPTY_GROUPED_STUDENTS } from "@/consts"
import type { PanelData, StudentData } from "@/types"
import { getAllPanels } from "@/utils"

import { PanelContainer } from "@/components/organisms/PanelContainer"
import { Search } from "@/components/organisms/Search"

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
        <PanelContainer data={data} />
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
