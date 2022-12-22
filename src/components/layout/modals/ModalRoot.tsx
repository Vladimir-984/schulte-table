import React from 'react'

import { ModalRoot as VKUIModalRoot } from '@vkontakte/vkui'
import { useLocation, useRouter } from '@happysanta/router'
import { ModalPageTableOptions } from './pages/tableOptions/options/ModalPageTableOptions'
import { MODAL_PAGES } from 'router/modals'
import { ModalPageTableParamsVariant } from './pages/tableOptions/variant/ModalPageTableParamsVariant'
import { ModalPageTableOptionsSize } from './pages/tableOptions/size/ModalPageTableOptionsSize'
// import { ModalPageTableOptionsColor } from './pages/tableOptions/color/ModalPageTableOptionsColor'
import { ModalPageTableOptionsSequence } from './pages/tableOptions/sequence/ModalPageTableOptionsSequence'
import { ModalPageTableOptionsTransforms } from './pages/tableOptions/transforms/ModalPageTableOptionsTransforms'

export const ModalRoot: React.FC = () => {
   const router = useRouter()
   const activeModal = useLocation().getModalId()
   // const prevActiveModalRef = React.useRef<string | null>(null)

   // console.log('activeModal', activeModal)

   /*    React.useEffect(() => {
      if (prevActiveModalRef.current === MODAL_PAGES.TABLE_OPTIONS) {

      }

      prevActiveModalRef.current = activeModal
   }, [activeModal]) */

   const onOpen = (modal: string) => {}
   const onOpened = (modal: string) => {}

   const onClose = (modal: typeof MODAL_PAGES[keyof typeof MODAL_PAGES]) => {
      // console.log('onClose', modal)
      // if (modal === 'table_options') {}

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
         <ModalPageTableParamsVariant nav={MODAL_PAGES.TABLE_VARIANT} />
         <ModalPageTableOptionsSize nav={MODAL_PAGES.TABLE_SIZE} />
         {/* <ModalPageTableOptionsColor nav={MODAL_PAGES.TABLE_COLOR} /> */}
         <ModalPageTableOptionsSequence nav={MODAL_PAGES.TABLE_SEQUENCE} />

         <ModalPageTableOptionsTransforms nav={MODAL_PAGES.TABLE_TRANSFORMS} />
      </VKUIModalRoot>
   )
}
