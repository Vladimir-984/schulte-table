import React from 'react'

import { ModalRoot as VKUIModalRoot } from '@vkontakte/vkui'
import { useLocation, useRouter } from '@happysanta/router'
import { ModalPageTableParams } from './pages/tableParams/ModalPageTableParams'
import { MODAL_PAGES } from 'router/modals'
import { ModalPageTableType } from './pages/tableParams/ModalPageTableType'
import { ModalPageTableVariant } from './pages/tableParams/ModalPageTableVariant'
import { ModalPageTableMode } from './pages/tableParams/ModalPageTableMode'
import { ModalPageTableSize } from './pages/tableParams/ModalPageTableSize'
import { ModalPageTableTypeSequence } from './pages/tableParams/ModalPageTableTypeSequence'

export const ModalRoot: React.FC = () => {
   const router = useRouter()
   const activeModal = useLocation().getModalId()

   const onOpen = (modal: string) => {}
   const onOpened = (modal: string) => {}
   const onClose = (modal: string) => {
      router.popPageIfModal()
   }
   const onClosed = (modal: string) => {}

   return (
      <VKUIModalRoot
         activeModal={activeModal}
         onOpen={onOpen}
         onOpened={onOpened}
         onClose={onClose}
         onClosed={onClosed}
      >
         <ModalPageTableParams nav={MODAL_PAGES.TABLE_PARAMS} />

         <ModalPageTableType nav={MODAL_PAGES.TABLE_TYPE} />
         <ModalPageTableVariant nav={MODAL_PAGES.TABLE_VARIANT} />
         <ModalPageTableMode nav={MODAL_PAGES.TABLE_MODE} />

         <ModalPageTableSize nav={MODAL_PAGES.TABLE_SIZE} />
         <ModalPageTableTypeSequence nav={MODAL_PAGES.TABLE_SEQUENCE} />
      </VKUIModalRoot>
   )
}
