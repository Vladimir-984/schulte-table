import React from 'react'
import { Group, ModalPage, ModalPageHeader, ModalPageProps, PanelHeaderBack, Separator } from '@vkontakte/vkui'
import { useRouter } from '@happysanta/router'

export const ModalPageTableType: React.FC<ModalPageProps> = (modalPageProps) => {
   const router = useRouter()

   const onClose = () => router.popPageTo(-2)

   return (
      <ModalPage
         {...modalPageProps}
         onClose={onClose}
         header={
            <>
               <ModalPageHeader before={<PanelHeaderBack />}>Тип</ModalPageHeader>
               <Separator wide />
            </>
         }
      >
         <Group></Group>
      </ModalPage>
   )
}
