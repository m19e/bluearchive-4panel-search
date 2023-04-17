import type { FC } from "react"
import type { InferGetServerSidePropsType, NextPage } from "next"
import { Provider } from "jotai"
import { useHydrateAtoms } from "jotai/utils"

import { EMPTY_GROUPED_STUDENTS } from "@/consts"
import type { PanelData, StudentData } from "@/types"
import { getAllPanels } from "@/utils"
import { allPanelsAtom } from "@/stores"

import { PanelContainer } from "@/components/organisms/PanelContainer"
import { Search } from "@/components/organisms/Search"

const HydrateAtoms: FC<{
  initialValue: { ja: PanelData[]; en: PanelData[]; aoharu: PanelData[] }
}> = ({ initialValue, children }) => {
  useHydrateAtoms([[allPanelsAtom, initialValue] as const])
  return <>{children}</>
}

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Page: NextPage<Props> = ({ panels, students }) => {
  return (
    <Provider>
      <HydrateAtoms initialValue={panels}>
        <div className="flex flex-col min-h-screen font-rounded bg-triangle">
          <div className="flex-1">
            <PanelContainer />
            <Search data={students} />
          </div>
          <footer className="w-full min-h-16"></footer>
        </div>
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
