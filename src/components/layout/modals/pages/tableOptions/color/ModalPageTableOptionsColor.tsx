import React from 'react'
import { useRouter } from '@happysanta/router'
import { Group, ModalPage, ModalPageHeader, ModalPageProps, PanelHeaderBack, Separator } from '@vkontakte/vkui'

export const ModalPageTableOptionsColor: React.FC<ModalPageProps> = (modalPageProps) => {
   const router = useRouter()

   const onClose = () => router.popPageTo(-2)
   const onClickBack = () => router.popPageIfModal()
   return (
      <ModalPage
         {...modalPageProps}
         onClose={onClose}
         header={
            <>
               <ModalPageHeader before={<PanelHeaderBack onClick={onClickBack} />}>Цвет</ModalPageHeader>
               <Separator wide />
            </>
         }
      >
         <Group separator='hide'></Group>
      </ModalPage>
   )
}
