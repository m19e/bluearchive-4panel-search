import type { Panel as PanelType, Student } from "@/types"

type Panel = Omit<PanelType, "students"> & { students: Student[] }

type Props = {
  panels: Panel[]
}

export const PanelList = ({ panels }: Props) => {
  const items = panels.map((panel) => <PanelItem key={panel.id} {...panel} />)

  return <div className="grid grid-cols-3 gap-4">{items}</div>
}

const PanelItem = ({ id, title, students, href, deleted }: Panel) => {
  return (
    <div className="flex flex-col gap-1 p-2 rounded border">
      <p>{id.split("-")[1]}話</p>
      <p>{title}</p>
      <p className="px-2 bg-pink-200 rounded">
        {students.map((s) => s.ja).join(", ")}
      </p>
      <div className="flex flex-1 justify-end items-end">
        <a
          className="py-1 px-2 font-bold text-white bg-blue-500 rounded link"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet Link
        </a>
      </div>
    </div>
  )
}

export const SkewedPanelList = ({ panels }: Props) => {
  const items = panels.map((panel) => (
    <SkewedPanelItem key={panel.id} {...panel} />
  ))

  return (
    <div className="overflow-y-scroll p-2 my-2 space-y-2 w-full max-w-sm h-64 bg-gray-100 border skewed-list scrollbar-hidden">
      {items}
    </div>
  )
}

const SkewedPanelItem = ({ id, title, students, href, deleted }: Panel) => {
  return (
    <div className="flex overflow-hidden relative gap-1 items-center px-6 h-14 bg-white border-l-4 border-sky-300 skewed-item">
      <div className="absolute bottom-0 -left-8 z-0 skew-x-[30deg]">
        <div className="triangle"></div>
      </div>
      <div className="absolute bottom-0 left-[2px] z-10">
        <p className="text-2xs">00{id.split("-")[1]}</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 skew-x-[30deg]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
        />
      </svg>

      <p className="text-sm">{title}</p>
      {/* <div className="px-2 bg-pink-200 rounded">
        <p>{students.map((s) => s.ja).join(", ")}</p>
      </div> */}
      <div className="flex flex-1 justify-end">
        <a
          className="flex justify-center py-1.5 w-16 bg-sky-300 rounded-sm"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-sm font-medium">入場</p>
        </a>
      </div>
    </div>
  )
}
