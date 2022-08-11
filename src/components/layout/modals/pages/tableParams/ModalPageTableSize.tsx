import React from 'react'
import { ModalPage, ModalPageHeader, ModalPageProps, PanelHeaderBack, Separator } from '@vkontakte/vkui'
import { useRouter } from '@happysanta/router'
import { GroupTableSize } from 'components/ui/groups/tableParams/GroupTableSize'

export const ModalPageTableSize: React.FC<ModalPageProps> = (modalPageProps) => {
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
         <GroupTableSize />
      </ModalPage>
   )
}
