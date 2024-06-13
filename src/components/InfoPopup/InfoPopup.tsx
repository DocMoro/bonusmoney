import './InfoPopup.css'

import * as Dialog from '@radix-ui/react-dialog'

const InfoPopup = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button violet">Edit profile</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Профиль успешно обновлён</Dialog.Title>
        <Dialog.Close asChild>
          <button className="BtnSave">Save changes</button>
        </Dialog.Close>
        <Dialog.Close asChild>
          <button className="BtnClose"></button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)

export default InfoPopup
