import React from 'react'
import { SimpleCell, Title } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useAppSelector } from 'hooks/redux'
import { useRouter } from '@happysanta/router'
import { selectChangeableTableType } from 'store/selectors/tableParams'
import { MODAL_PAGES } from 'router/modals'
import { TABLE_TYPE } from '../groups/tableParams/GroupTableType'

export const CellTableType: React.FC = () => {
   const router = useRouter()
   const tableType = useAppSelector(selectChangeableTableType)

   const onClickTableType = () => {
      router.pushModal(MODAL_PAGES.TABLE_TYPE)
   }
   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         after={
            <Title level='3' weight='2'>
               {TABLE_TYPE[tableType]}
            </Title>
         }
         expandable
         onClick={onClickTableType}
      >
         Тип
      </SimpleCell>
   )
}
