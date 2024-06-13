import * as Dialog from '@radix-ui/react-dialog'
import { FC } from 'react'

import s from './PreloadingScreen.module.css'

type PreloadingScreenProps = {
  isOpen: boolean
}

const PreloadingScreen: FC<PreloadingScreenProps> = ({ isOpen }) => {
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={s.DialogOverlay}>
          <Dialog.Content className={s.DialogContent} />
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default PreloadingScreen
