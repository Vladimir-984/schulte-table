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
import { useAppDispatch } from 'hooks/redux'

import { applyTableOptions } from 'store/asyncThunks/tableOptions'
import { GroupTableOptionsMain } from './groups/main/GroupTableOptionsMain'
import { GroupTableOptionsAdditionally } from './groups/additionally/GroupTableOptionsAdditionally'
import { GroupTableOptionsColored } from './groups/colored/GroupTableOptionsColored'
import { GroupTableOptionsRedBlack } from './groups/redBlack/GroupTableOptionsRedBlack'

export const ModalPageTableOptions: React.FC<ModalPageProps> = (modalPageProps) => {
   const onClose = useModalClose()
   const dispatch = useAppDispatch()

   const onClickSubmit = async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const action = await dispatch(applyTableOptions())
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
         <Group>
            <GroupTableOptionsMain />
            <GroupTableOptionsAdditionally />
            <GroupTableOptionsColored />
            <GroupTableOptionsRedBlack />
         </Group>
      </ModalPage>
   )
}
