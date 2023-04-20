import type { InferGetServerSidePropsType, NextPage } from "next"

import { getAllData, HydrateAtoms } from "@/utils"
import { allPanelsAtom, langAtom } from "@/stores"

import { TopPage } from "@/components/templates/TopPage"

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Page: NextPage<Props> = ({ panels, students }) => {
  return (
    <HydrateAtoms
      initialValues={[
        [allPanelsAtom, panels],
        [langAtom, "en"],
      ]}
    >
      <TopPage students={students} />
    </HydrateAtoms>
  )
}

export const getServerSideProps = async () => {
  const props = await getAllData()

  return {
    props,
  }
}

export default Page