import React from 'react'
import { useRouter } from '@happysanta/router'
import { useAppSelector } from 'hooks/redux'
import { selectChangeableTableVariant } from 'store/selectors/tableOptions'
import { MODAL_PAGES } from 'router/modals'
import { SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'

import { AfterTableOptionsAdditionallySequence } from './AfterTableOptionsAdditionallySequence'

export const CellTableOptionsAdditionallySequence: React.FC = () => {
   const router = useRouter()

   const tableVariant = useAppSelector(selectChangeableTableVariant)

   const onClickTableTypeSequence = () => {
      router.pushModal(MODAL_PAGES.TABLE_SEQUENCE)
   }

   if (tableVariant.id === '') {
      return (
         <SimpleCell disabled after={<AfterTableOptionsAdditionallySequence primary={false} />}>
            Порядок
         </SimpleCell>
      )
   }

   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         after={<AfterTableOptionsAdditionallySequence primary />}
         expandable
         onClick={onClickTableTypeSequence}
      >
         Порядок
      </SimpleCell>
   )
}
