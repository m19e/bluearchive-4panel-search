import type { InferGetServerSidePropsType, NextPage } from "next"
import { Provider } from "jotai"

import { getAllData, HydrateAtoms } from "@/utils"
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

export const getServerSideProps = async () => {
  const props = await getAllData()

  return {
    props,
  }
}

export default Page
