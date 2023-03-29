import type { NextPage, InferGetServerSidePropsType } from "next"
import { getAllPanels } from "@/utils"

import { PanelList } from "@/components/molecules/PanelList"

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Page: NextPage<Props> = ({ panels }) => {
  return (
    <>
      <SkewScroll />
      <div className="p-4 space-y-4">
        <h1 className="text-3xl">ブルアカ4コマ検索</h1>
        <h2 className="text-xl">ぶるーあーかいぶっ！</h2>
        <PanelList panels={panels.ja} />
        <div className="my-2 w-full h-[1px] bg-black"></div>
        <h2 className="text-xl">Blue Archive Official 4-Panel Manga</h2>
        <PanelList panels={panels.en} />
        <div className="my-2 w-full h-[1px] bg-black"></div>
        <h2 className="text-xl">あおはるレコード</h2>
        <PanelList panels={panels.aoharu} />
      </div>
    </>
  )
}

const SkewScroll = () => {
  return (
    <div className="flex justify-center w-full bg-gray-300">
      <div className="overflow-y-scroll p-2 space-y-2 w-1/2 h-40 bg-white border transform-gpu -skew-x-12 scrollbar-hidden">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="px-4 w-full bg-gray-200">
            <p className="skew-x-12">text</p>
          </div>
        ))}
      </div>
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
