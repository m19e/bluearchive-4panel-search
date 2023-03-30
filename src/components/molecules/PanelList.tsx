import type { Panel as PanelType, Student } from "@/types"

type Panel = Omit<PanelType, "students"> & { students: Student[] }

type Props = {
  title: string
  panels: Panel[]
}
export const SkewedPanelList = ({ title, panels }: Props) => {
  const items = panels.map((panel) => (
    <SkewedPanelItem key={panel.id} {...panel} />
  ))

  return (
    <div className="overflow-y-scroll p-2 my-2 space-y-2 w-full max-w-md h-64 min-h-screen bg-sky-100 skewed-list scrollbar-hidden">
      <Category title={title} />
      {items}
    </div>
  )
}

const Category = ({ title }: { title: string }) => {
  return (
    <div className="flex overflow-hidden relative gap-1 justify-end items-center py-3 px-8 w-full font-rounded bg-white rounded shadow-md skewed-item">
      <div className="flex absolute bottom-0 -left-11 z-0 items-end skew-x-[30deg]">
        <div className="bg-gray-100 triangle"></div>
        <div className="flex gap-0 items-center h-6 text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={2}
            viewBox="0 0 16 16"
            className="mx-1 w-2 h-2"
          >
            <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"></path>
          </svg>
        </div>
      </div>
      <p className="text-xl font-bold">{title}</p>
      <div className="absolute top-0 -right-11 z-0 skew-x-[30deg]">
        <div className="bg-gray-100 rotate-180 triangle"></div>
      </div>
    </div>
  )
}

const SkewedPanelItem = ({ id, title, students, href, deleted }: Panel) => {
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
