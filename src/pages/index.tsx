import type { NextPage, InferGetServerSidePropsType } from "next"
import { getAllPanels } from "@/utils"

import { PanelList } from "@/components/molecules/PanelList"

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Page: NextPage<Props> = ({ panels }) => {
  return (
    <>
      <div className="p-4 space-y-4">
        <h1 className="text-3xl">ブルアカ4コマ検索</h1>
        <div className="flex justify-center w-full">
          <PanelList
            title="ぶるーあーかいぶっ！"
            panels={panels.ja.reverse()}
          />
        </div>
        <div className="flex justify-center w-full">
          <PanelList
            title="Official 4-Panel Manga"
            panels={panels.en.reverse()}
          />
        </div>
        <div className="flex justify-center w-full">
          <PanelList
            title="あおはるレコード"
            panels={panels.aoharu.reverse()}
          />
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
