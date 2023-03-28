import ky from "ky"
import type { NextPage, InferGetServerSidePropsType } from "next"

import type { Panel } from "@/types"

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Page: NextPage<Props> = ({ panels }) => {
  return (
    <div className="p-4">
      <h1 className="text-xl">ブルアカ4コマ検索</h1>
      <p className="whitespace-pre-wrap">{JSON.stringify(panels, null, 2)}</p>
    </div>
  )
}

export const getServerSideProps = async () => {
  const panels = await ky
    .get("https://m19e.github.io/bluearchive-4panel/panels/aoharu.json")
    .json<Panel[]>()

  return {
    props: {
      panels,
    },
  }
}

export default Page
