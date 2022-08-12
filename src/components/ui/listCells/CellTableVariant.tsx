import React from 'react'
import { useRouter } from '@happysanta/router'
import { SimpleCell, Title } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useAppSelector } from 'hooks/redux'
import { MODAL_PAGES } from 'router/modals'
import { selectChangeableTableVariant } from 'store/selectors/tableParams'
import { TABLE_VARIANT } from '../groups/tableParams/GroupTableVariant'

export const CellTableVariant: React.FC = () => {
   const router = useRouter()
   const tableVariant = useAppSelector(selectChangeableTableVariant)
   const onClickTableVariant = () => {
      router.pushModal(MODAL_PAGES.TABLE_VARIANT)
   }

   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         after={
            <Title level='3' weight='2'>
               {TABLE_VARIANT[tableVariant]}
            </Title>
         }
         expandable
         onClick={onClickTableVariant}
      >
         Вариант
      </SimpleCell>
   )
}
