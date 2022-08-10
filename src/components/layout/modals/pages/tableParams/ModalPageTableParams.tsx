import React from 'react'
import {
   Group,
   ModalPage,
   ModalPageHeader,
   ModalPageProps,
   PanelHeaderClose,
   PanelHeaderSubmit,
   Separator,
} from '@vkontakte/vkui'
import { useModalClose } from 'hooks/modal'

export const ModalPageTableParams: React.FC<ModalPageProps> = (modalPageProps) => {
   const onClose = useModalClose()

   const onClickSubmit = () => {
      onClose && onClose()
   }

   return (
      <ModalPage
         {...modalPageProps}
         header={
            <>
               <ModalPageHeader
                  before={<PanelHeaderClose onClick={onClose} />}
                  after={<PanelHeaderSubmit onClick={onClickSubmit} />}
               >
                  Параметры таблицы
               </ModalPageHeader>
               <Separator wide />
            </>
         }
      >
         <Group>Group</Group>
      </ModalPage>
   )
}
