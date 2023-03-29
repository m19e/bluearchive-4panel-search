import type { Panel as PanelType, Student } from "@/types"

type Panel = Omit<PanelType, "students"> & { students: Student[] }

type Props = {
  panels: Panel[]
}
export const SkewedPanelList = ({ panels }: Props) => {
  const items = panels.map((panel) => (
    <SkewedPanelItem key={panel.id} {...panel} />
  ))

  return (
    <div className="overflow-y-scroll p-2 my-2 space-y-2 w-full max-w-md h-64 bg-gray-600 skewed-list scrollbar-hidden">
      {items}
    </div>
  )
}

const SkewedPanelItem = ({ id, title, students, href, deleted }: Panel) => {
  return (
    <div className="flex overflow-hidden relative gap-1 items-center pt-2 pr-8 pb-3 pl-6 font-rounded bg-white rounded-sm border-l-4 border-sky-300 skewed-item">
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

const getEpisodeFromID = (id: string) => {
  const digit3 = id.split("-")[1]
  const is3 = digit3.length === 3
  const digit2 = ("00" + digit3).slice(-2)

  return { digit3, digit2, is3 }
}

const Episode = ({ id }: { id: string }) => {
  const { is3, digit2, digit3 } = getEpisodeFromID(id)
  const triangleLeft = is3 ? "-left-7" : "-left-8"

  return (
    <>
      <div className={`absolute bottom-0 z-0 skew-x-[30deg] ${triangleLeft}`}>
        <div className="bg-sky-100 triangle"></div>
      </div>
      {is3 ? (
        <div className="absolute bottom-0 left-[2px] z-10">
          <p className="font-medium text-center text-2xs">{digit3}</p>
        </div>
      ) : (
        <div className="absolute bottom-0 left-1 z-10">
          <p className="text-xs font-medium text-center">{digit2}</p>
        </div>
      )}
    </>
  )
}
