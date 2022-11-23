import React from 'react'
import { Group, ModalPage, ModalPageHeader, ModalPageProps, PanelHeaderBack, Separator } from '@vkontakte/vkui'
import { useRouter } from '@happysanta/router'
import { GroupTableOptionsSize } from './groups/GroupTableOptionsSize'

export const ModalPageTableOptionsSize: React.FC<ModalPageProps> = (modalPageProps) => {
   const router = useRouter()

   const onClose = () => router.popPageTo(-2)

   const onClickBack = () => router.popPageIfModal()

   return (
      <ModalPage
         {...modalPageProps}
         onClose={onClose}
         header={
            <>
               <ModalPageHeader before={<PanelHeaderBack onClick={onClickBack} />}>Размер</ModalPageHeader>
               <Separator wide />
            </>
         }
      >
         <Group separator='hide'>
            <GroupTableOptionsSize />
         </Group>
      </ModalPage>
   )
}
