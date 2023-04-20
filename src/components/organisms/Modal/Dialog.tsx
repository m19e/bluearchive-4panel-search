import { useSelectedPanel } from "@/hooks"

export const ModalDialog = () => {
  const [selectedPanel] = useSelectedPanel()

  return (
    <>
      <input type="checkbox" id="modal" className="modal-toggle" />
      <label htmlFor="modal" className="cursor-pointer modal">
        <label className="relative modal-box" htmlFor="">
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">{JSON.stringify(selectedPanel, null, 2)}</p>
        </label>
      </label>
    </>
  )
}
