import type { PanelData } from "@/types"

import { Episode } from "@/components/molecules/Episode"
import { Marks } from "@/components/atoms/Marks"

type CategoryData = {
  title: string
  panels: PanelData[]
}

type Props = {
  data: CategoryData[]
}

export const PanelList = ({ data }: Props) => {
  const categories = data.map((d) => <CategoryList key={d.title} {...d} />)

  return (
    <div className="overflow-y-scroll p-2 my-2 space-y-2 w-full max-w-md h-96 bg-sky-100 skewed-list scrollbar-hidden">
      {categories}
    </div>
  )
}

const CategoryList = ({ title, panels }: CategoryData) => {
  const items = panels.map((panel) => <PanelItem key={panel.id} {...panel} />)

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

const PanelItem = ({ id, title, students, href, deleted }: PanelData) => {
  return (
    <div className="flex overflow-hidden relative gap-1 items-center pt-2 pr-8 pb-3 pl-6 font-rounded bg-white rounded-sm border-l-4 border-sky-300 shadow skewed-item">
      <Episode id={id} />
      <p className="font-medium">{title}</p>
      <div className="flex flex-1 justify-end">
        <a
          className="flex justify-center py-2 w-24 bg-sky-300 rounded-sm"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="font-medium">入場</p>
        </a>
      </div>
      <div className="absolute top-0 -right-8 z-0 skew-x-[30deg]">
        <div className="bg-gray-100 rotate-180 triangle"></div>
      </div>
    </div>
  )
}
