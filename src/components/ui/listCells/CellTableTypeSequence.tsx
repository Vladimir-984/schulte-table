import React from 'react'
import { useRouter } from '@happysanta/router'
import { useAppSelector } from 'hooks/redux'
import { selectChangeableTableTypeSequence, selectChangeableTableVariant } from 'store/selectors/tableParams'
import { MODAL_PAGES } from 'router/modals'
import { SimpleCell, Title } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { TABLE_TYPE_SEQUENCE } from '../groups/tableParams/GroupTableTypeSequence'
import { TableVariant } from 'types/table'

export const CellTableTypeSequence: React.FC = () => {
   const router = useRouter()
   const tableTypeSequence = useAppSelector(selectChangeableTableTypeSequence)
   const tableVariant = useAppSelector(selectChangeableTableVariant)

   const onClickTableTypeSequence = () => {
      router.pushModal(MODAL_PAGES.TABLE_SEQUENCE)
   }

   if (tableVariant === TableVariant.GORBOV) {
      return (
         <SimpleCell
            disabled
            after={
               <Title level='3' weight='2' style={{ color: 'var(--vkui--color_text_tertiary)' }}>
                  {TABLE_TYPE_SEQUENCE[tableTypeSequence]}
               </Title>
            }
         >
            Порядок
         </SimpleCell>
      )
   }

   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         after={
            <Title level='3' weight='2'>
               {TABLE_TYPE_SEQUENCE[tableTypeSequence]}
            </Title>
         }
         expandable
         onClick={onClickTableTypeSequence}
      >
         Порядок
      </SimpleCell>
   )
}
