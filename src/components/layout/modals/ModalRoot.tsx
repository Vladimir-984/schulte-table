import React from 'react'

import { ModalRoot as VKUIModalRoot } from '@vkontakte/vkui'
import { useLocation, useRouter } from '@happysanta/router'
import { ModalPageTableParams } from './pages/tableParams/params/ModalPageTableParams'
import { MODAL_PAGES } from 'router/modals'
import { ModalPageTableParamsType } from './pages/tableParams/type/ModalPageTableParamsType'
import { ModalPageTableParamsVariant } from './pages/tableParams/variant/ModalPageTableParamsVariant'
import { ModalPageTableParamsMode } from './pages/tableParams/mode/ModalPageTableParamsMode'
import { ModalPageTableParamsSize } from './pages/tableParams/size/ModalPageTableParamsSize'
import { ModalPageTableParamsSequence } from './pages/tableParams/sequence/ModalPageTableParamsSequence'

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
         <ModalPageTableParamsType nav={MODAL_PAGES.TABLE_TYPE} />
         <ModalPageTableParamsVariant nav={MODAL_PAGES.TABLE_VARIANT} />
         <ModalPageTableParamsMode nav={MODAL_PAGES.TABLE_MODE} />
         <ModalPageTableParamsSize nav={MODAL_PAGES.TABLE_SIZE} />
         {/*   <ModalPageTableParamsSequence nav={MODAL_PAGES.TABLE_SEQUENCE} /> */}
      </VKUIModalRoot>
   )
}
