import './InfoPopup.css'

import * as Dialog from '@radix-ui/react-dialog'
import { FC } from 'react'

import { TInfoPopupData } from '../../shared/constants/type'

type InfoPopupProps = {
  infoPopupData: TInfoPopupData
  setInfoPopupData: (obj: TInfoPopupData) => void
}

const InfoPopup: FC<InfoPopupProps> = ({ infoPopupData, setInfoPopupData }) => {
  const { isOpen, message } = infoPopupData

  const handleClosePopup = (open: boolean) => {
    setInfoPopupData({
      ...infoPopupData,
      isOpen: open
    })
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleClosePopup}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">{message}</Dialog.Title>
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
}

export default InfoPopup
