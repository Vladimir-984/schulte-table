import React from 'react'

import { ModalRoot as VKUIModalRoot } from '@vkontakte/vkui'
import { useLocation, useRouter } from '@happysanta/router'
import { ModalPageTableOptions } from './pages/tableOptions/options/ModalPageTableOptions'
import { MODAL_PAGES } from 'router/modals'
import { ModalPageTableParamsType } from './pages/tableOptions/type/ModalPageTableParamsType'
import { ModalPageTableParamsVariant } from './pages/tableOptions/variant/ModalPageTableParamsVariant'
import { ModalPageTableParamsMode } from './pages/tableOptions/mode/ModalPageTableParamsMode'
import { ModalPageTableOptionsSize } from './pages/tableOptions/size/ModalPageTableOptionsSize'
import { ModalPageTableParamsSequence } from './pages/tableOptions/sequence/ModalPageTableParamsSequence'
import { ModalPageTableOptionsColor } from './pages/tableOptions/color/ModalPageTableOptionsColor'
import { ModalPageTableOptionsRedBlackVariant } from './pages/tableOptions/redBlackVariant/ModalPageTableOptionsRedBlackVariant'

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
         <ModalPageTableOptions nav={MODAL_PAGES.TABLE_OPTIONS} />
         <ModalPageTableParamsType nav={MODAL_PAGES.TABLE_TYPE} />
         <ModalPageTableParamsVariant nav={MODAL_PAGES.TABLE_VARIANT} />
         <ModalPageTableParamsMode nav={MODAL_PAGES.TABLE_MODE} />
         <ModalPageTableOptionsSize nav={MODAL_PAGES.TABLE_SIZE} />
         <ModalPageTableOptionsColor nav={MODAL_PAGES.TABLE_COLOR} />
         <ModalPageTableOptionsRedBlackVariant nav={MODAL_PAGES.TABLE_RED_BLACK_VARIANT} />
         <ModalPageTableParamsSequence nav={MODAL_PAGES.TABLE_SEQUENCE} />
      </VKUIModalRoot>
   )
}
