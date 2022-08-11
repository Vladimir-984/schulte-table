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

import { GroupMainTableParams } from 'components/ui/groups/tableParams/GroupMainTableParams'
import { GroupOtherTableParams } from 'components/ui/groups/tableParams/GroupOtherTableParams'
import { applyTableParams } from 'store/asyncThunks/tableParams'
import { GroupCellsTableParams } from 'components/ui/groups/tableParams/GroupCellsTableParams'

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
            <GroupMainTableParams />
            <GroupOtherTableParams />
            <GroupCellsTableParams />
         </Group>
      </ModalPage>
   )
}
