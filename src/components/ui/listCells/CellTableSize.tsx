import React from 'react'
import { SimpleCell, Title } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useRouter } from '@happysanta/router'
import { useAppSelector } from 'hooks/redux'
import { selectChangeableTableSize } from 'store/selectors/tableParams'
import { MODAL_PAGES } from 'router/modals'
import { getSizeWithX } from 'table/generator'

export const CellTableSize: React.FC = () => {
   const router = useRouter()
   const tableSize = useAppSelector(selectChangeableTableSize)

   const onClickTableSize = () => {
      router.pushModal(MODAL_PAGES.TABLE_SIZE)
   }

   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         after={
            <Title level='3' weight='2'>
               {getSizeWithX(tableSize)}
            </Title>
         }
         expandable
         onClick={onClickTableSize}
      >
         Размер
      </SimpleCell>
   )
}
