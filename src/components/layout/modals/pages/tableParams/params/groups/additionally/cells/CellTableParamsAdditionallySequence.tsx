import React from 'react'
import { useRouter } from '@happysanta/router'
import { useAppSelector } from 'hooks/redux'
import { selectChangeableTableVariant } from 'store/selectors/tableParams'
import { MODAL_PAGES } from 'router/modals'
import { SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { TableVariant } from 'types/table'
import { AfterTableParamsAdditionallySequence } from './afters/AfterTableParamsAdditionallySequence'

export const CellTableParamsAdditionallySequence: React.FC = () => {
   const router = useRouter()

   const tableVariant = useAppSelector(selectChangeableTableVariant)

   const onClickTableTypeSequence = () => {
      router.pushModal(MODAL_PAGES.TABLE_SEQUENCE)
   }

   if (tableVariant === TableVariant.GORBOV) {
      return (
         <SimpleCell disabled after={<AfterTableParamsAdditionallySequence primary={false} />}>
            Порядок
         </SimpleCell>
      )
   }

   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         after={<AfterTableParamsAdditionallySequence primary />}
         expandable
         onClick={onClickTableTypeSequence}
      >
         Порядок
      </SimpleCell>
   )
}
