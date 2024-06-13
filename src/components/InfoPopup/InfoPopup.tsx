import * as Dialog from '@radix-ui/react-dialog'
import { FC } from 'react'

import { TInfoPopupData } from '../../shared/constants/type'
import s from './InfoPopup.module.css'

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
        <Dialog.Overlay className={s.DialogOverlay} />
        <Dialog.Content className={s.DialogContent}>
          <Dialog.Title className={s.DialogTitle}>{message}</Dialog.Title>
          <Dialog.Close asChild>
            <button className={s.BtnSave}>Save changes</button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <button className={s.BtnClose}></button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default InfoPopup
