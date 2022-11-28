import React from 'react'
import { Group, ModalPage, ModalPageHeader, ModalPageProps, PanelHeaderBack, Separator } from '@vkontakte/vkui'
import { GroupTableOptionsRedBlackVariant } from './groups/GroupTableOptionsRedBlackVariant'
import { useRouter } from '@happysanta/router'

export const ModalPageTableOptionsRedBlackVariant: React.FC<ModalPageProps> = (modalPageProps) => {
   const router = useRouter()

   const onClose = () => router.popPageTo(-2)
   const onClickBack = () => router.popPageIfModal()
   return (
      <ModalPage
         {...modalPageProps}
         onClose={onClose}
         header={
            <>
               <ModalPageHeader before={<PanelHeaderBack onClick={onClickBack} />}>
                  Красно-чёрный вариант
               </ModalPageHeader>
               <Separator wide />
            </>
         }
      >
         <Group separator='hide'>
            <GroupTableOptionsRedBlackVariant />
         </Group>
      </ModalPage>
   )
}
