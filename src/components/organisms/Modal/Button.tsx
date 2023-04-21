import { useLocale } from "@/hooks/useLocale"

type Props = {
  onClick: () => void
}

export const ModalButton = ({ onClick }: Props) => {
  const { t } = useLocale()

  return (
    <label
      className="flex justify-center py-1 w-12 bg-sky-300 rounded-sm sm:py-2 sm:w-24"
      htmlFor="modal"
      onClick={onClick}
    >
      <p className="font-medium leading-3 sm:text-sm text-2xs">
        {t.ENTER_PANEL}
      </p>
    </label>
  )
}
