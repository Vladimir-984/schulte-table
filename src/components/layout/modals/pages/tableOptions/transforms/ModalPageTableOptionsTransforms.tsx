import React from 'react'
import { Group, ModalPage, ModalPageHeader, ModalPageProps, PanelHeaderBack, Separator } from '@vkontakte/vkui'
import { useRouter } from '@happysanta/router'
import { GroupTableOptionsTransforms } from './groups/GroupTableOptionsTransforms'

export const ModalPageTableOptionsTransforms: React.FC<ModalPageProps> = (modalPageProps) => {
   const router = useRouter()

   const onClose = () => router.popPageTo(-2)

   const onClickBack = () => router.popPageIfModal()

   return (
      <ModalPage
         {...modalPageProps}
         onClose={onClose}
         header={
            <>
               <ModalPageHeader before={<PanelHeaderBack onClick={onClickBack} />}>Трансформации</ModalPageHeader>
               <Separator wide />
            </>
         }
      >
         <Group separator='hide'>
            <GroupTableOptionsTransforms />
         </Group>
      </ModalPage>
   )
}
