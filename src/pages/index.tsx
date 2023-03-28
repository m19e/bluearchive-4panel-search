import type { NextPage, InferGetServerSidePropsType } from "next"
import { getAllPanels } from "@/utils"

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Page: NextPage<Props> = ({ panels }) => {
  return (
    <div className="p-4">
      <h1 className="text-xl">ブルアカ4コマ検索</h1>
      <h2>ぶるーあーかいぶっ！</h2>
      <p className="whitespace-pre-wrap">
        {JSON.stringify(panels.ja, null, 4)}
      </p>
      <div className="my-2 w-full h-[1px] bg-black"></div>
      <h2>Blue Archive Official 4-Panel Manga</h2>
      <p className="whitespace-pre-wrap">
        {JSON.stringify(panels.en, null, 4)}
      </p>
      <div className="my-2 w-full h-[1px] bg-black"></div>
      <h2>あおはるレコード</h2>
      <p className="whitespace-pre-wrap">
        {JSON.stringify(panels.aoharu, null, 2)}
      </p>
    </div>
  )
}

export const getServerSideProps = async () => {
  const panels = await getAllPanels()

  return {
    props: {
      panels,
    },
  }
}

export default Page
