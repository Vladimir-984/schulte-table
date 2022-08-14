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

import { applyTableParams } from 'store/asyncThunks/tableParams'
import { GroupTableParamsMain } from './groups/main/GroupTableParamsMain'
import { GroupTableParamsAdditionally } from './groups/additionally/GroupTableParamsAdditionally'
import { GroupTableParamsCells } from './groups/cells/GroupTableParamsCells'

export const ModalPageTableParams: React.FC<ModalPageProps> = (modalPageProps) => {
   const onClose = useModalClose()
   const dispatch = useAppDispatch()

   const onClickSubmit = async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const action = await dispatch(applyTableParams())
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
            <GroupTableParamsMain />
            <GroupTableParamsAdditionally />
            <GroupTableParamsCells />
         </Group>
      </ModalPage>
   )
}
