import React from 'react'
import { Group, ModalPage, ModalPageHeader, ModalPageProps, PanelHeaderBack, Separator } from '@vkontakte/vkui'
import { useRouter } from '@happysanta/router'
import { GroupTableParamsMode } from './groups/GroupTableParamsMode'

export const ModalPageTableParamsMode: React.FC<ModalPageProps> = (modalPageProps) => {
   const router = useRouter()

   const onClose = () => router.popPageTo(-2)
   const onClickBack = () => router.popPageIfModal()
   return (
      <ModalPage
         {...modalPageProps}
         onClose={onClose}
         header={
            <>
               <ModalPageHeader before={<PanelHeaderBack onClick={onClickBack} />}>Режим</ModalPageHeader>
               <Separator wide />
            </>
         }
      >
         <Group separator='hide'>
            <GroupTableParamsMode />
         </Group>
      </ModalPage>
   )
}
