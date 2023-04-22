import type { GetStaticPaths, InferGetStaticPropsType, NextPage } from "next"

import { getAllData, HydrateAtoms } from "@/utils"
import { allPanelsAtom } from "@/stores"

import { TopPage } from "@/components/templates/TopPage"

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<Props> = ({ panels, students }) => {
  return (
    <HydrateAtoms initialValues={[[allPanelsAtom, panels]]}>
      <TopPage students={students} />
    </HydrateAtoms>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ["/ja", "/en"].map((locale) => ({ params: { locale } }))

  return { paths, fallback: false }
}

export const getStaticProps = async () => {
  const props = await getAllData()

  return {
    props,
  }
}

export default Page
