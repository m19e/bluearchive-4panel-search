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
