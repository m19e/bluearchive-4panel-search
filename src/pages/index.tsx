import type { NextPage, InferGetServerSidePropsType } from "next"
import { getAllPanels } from "@/utils"

import { SkewedPanelList } from "@/components/molecules/PanelList"

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Page: NextPage<Props> = ({ panels }) => {
  return (
    <>
      <div className="p-4 space-y-4">
        <h1 className="text-3xl">ブルアカ4コマ検索</h1>
        <h2 className="text-xl">ぶるーあーかいぶっ！</h2>
        <div className="flex justify-center w-full">
          <SkewedPanelList panels={panels.ja.reverse()} />
        </div>
        <div className="my-2 w-full h-[1px] bg-black"></div>
        <h2 className="text-xl">Blue Archive Official 4-Panel Manga</h2>
        <div className="flex justify-center w-full">
          <SkewedPanelList panels={panels.en} />
        </div>
        <div className="my-2 w-full h-[1px] bg-black"></div>
        <h2 className="text-xl">あおはるレコード</h2>
        <div className="flex justify-center w-full">
          <SkewedPanelList panels={panels.aoharu} />
        </div>
      </div>
    </>
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
