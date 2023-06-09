import { getEpisodeFromID } from "@/utils"

type Props = {
  id: string
}

export const Episode = ({ id }: Props) => {
  const { is3, digit2, digit3 } = getEpisodeFromID(id)
  const triangleLeft = is3 ? "-left-8 sm:-left-7" : "-left-9 sm:-left-8"

  return (
    <>
      <div className={`absolute bottom-0 z-0 skew-x-[30deg] ${triangleLeft}`}>
        <div className="triangle bg-sky-100"></div>
      </div>
      {is3 ? (
        <div className="absolute bottom-0 left-[2px] z-10">
          <p className="text-center text-xs font-medium leading-3 sm:leading-4">
            {digit3}
          </p>
        </div>
      ) : (
        <div className="absolute bottom-0 left-1 z-10">
          <p className="text-center text-xs font-medium leading-3 sm:text-xs sm:leading-4">
            {digit2}
          </p>
        </div>
      )}
    </>
  )
}
