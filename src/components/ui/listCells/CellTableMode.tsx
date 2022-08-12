import { useRouter } from '@happysanta/router'
import { SimpleCell, Title } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useAppSelector } from 'hooks/redux'
import React from 'react'
import { MODAL_PAGES } from 'router/modals'
import { selectChangeableTableMode } from 'store/selectors/tableParams'
import { TABLE_MODE } from '../groups/tableParams/GroupTableMode'

export const CellTableMode: React.FC = () => {
   const router = useRouter()
   const tableMode = useAppSelector(selectChangeableTableMode)

   const onClickTableMode = () => {
      router.pushModal(MODAL_PAGES.TABLE_MODE)
   }

   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         after={
            <Title level='3' weight='2'>
               {TABLE_MODE[tableMode]}
            </Title>
         }
         expandable
         onClick={onClickTableMode}
      >
         Режим
      </SimpleCell>
   )
}
