import type { InferGetServerSidePropsType, NextPage } from "next"
import { Provider } from "jotai"

import { EMPTY_GROUPED_STUDENTS } from "@/consts"
import type { PanelData, StudentData } from "@/types"
import { getAllPanels, HydrateAtoms } from "@/utils"
import { allPanelsAtom, langAtom } from "@/stores"

import { TopPage } from "@/components/templates/TopPage"

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Page: NextPage<Props> = ({ panels, students }) => {
  return (
    <Provider>
      <HydrateAtoms
        initialValues={[
          [allPanelsAtom, panels],
          [langAtom, "ja"],
        ]}
      >
        <TopPage students={students} />
      </HydrateAtoms>
    </Provider>
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
