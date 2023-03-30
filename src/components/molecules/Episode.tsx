const getEpisodeFromID = (id: string) => {
  const digit3 = id.split("-")[1]
  const is3 = digit3.length === 3
  const digit2 = ("00" + digit3).slice(-2)

  return { digit3, digit2, is3 }
}

type Props = {
  id: string
}

export const Episode = ({ id }: Props) => {
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
