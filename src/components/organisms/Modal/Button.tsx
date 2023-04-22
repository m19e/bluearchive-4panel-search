import { useLocale } from "@/hooks/useLocale"

type Props = {
  onClick: () => void
}

export const ModalButton = ({ onClick }: Props) => {
  const { t } = useLocale()

  return (
    <label
      className="flex w-14 justify-center rounded-sm bg-sky-300 py-1.5 sm:w-24 sm:py-2"
      htmlFor="modal"
      onClick={onClick}
    >
      <p className="text-2xs font-medium leading-3 sm:text-sm">
        {t.ENTER_PANEL}
      </p>
    </label>
  )
}
