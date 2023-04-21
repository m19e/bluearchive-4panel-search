import type { CategoryData, PanelData } from "@/types"
import { useSelectedPanel } from "@/hooks"

import { ModalButton } from "@/components/organisms/Modal/Button"
import { Episode } from "@/components/molecules/Episode"
import { Marks } from "@/components/atoms/Marks"

type Props = {
  data: CategoryData[]
}

export const PanelList = ({ data }: Props) => {
  const categories = data.map((d) => <CategoryList key={d.title} {...d} />)

  return (
    <div className="overflow-y-scroll p-2 pt-[120px] pb-[100px] space-y-1 w-full max-w-md h-64 bg-transparent sm:pt-[180px] sm:space-y-2 sm:h-96 skewed-list scrollbar-hidden">
      {categories}
    </div>
  )
}

const CategoryList = ({ title, panels }: CategoryData) => {
  const items = panels.map((panel) => (
    <PanelItem key={panel.id} panel={panel} />
  ))

  return (
    <>
      <Category title={title} />
      {items}
    </>
  )
}

const Category = ({ title }: { title: string }) => {
  return (
    <div className="flex overflow-hidden relative gap-1 justify-end items-center py-3 px-8 w-full font-rounded bg-white rounded shadow-md skewed-item">
      <div className="flex absolute bottom-0 -left-11 z-0 items-end skew-x-[30deg]">
        <div className="bg-gray-100 triangle"></div>
        <Marks />
      </div>
      <p className="text-xl font-bold">{title}</p>
      <div className="absolute top-0 -right-11 z-0 skew-x-[30deg]">
        <div className="bg-gray-100 rotate-180 triangle"></div>
      </div>
    </div>
  )
}

const PanelItem = ({ panel }: { panel: PanelData }) => {
  const { id, title } = panel
  const [, selectPanel] = useSelectedPanel()

  return (
    <div className="flex overflow-hidden relative gap-1 items-center py-2 pr-2 pl-5 font-rounded text-sm bg-white rounded-sm border-l-4 border-sky-300 shadow sm:pr-8 sm:pl-6 sm:text-base skewed-item">
      <Episode id={id} />
      <p className="font-medium">{title}</p>
      <div className="flex flex-1 justify-end">
        <ModalButton onClick={() => selectPanel(panel)} />
      </div>
      <div className="absolute top-0 -right-14 z-0 skew-x-[30deg] sm:-right-8">
        <div className="bg-gray-100 rotate-180 triangle"></div>
      </div>
    </div>
  )
}
