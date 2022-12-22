import React from 'react'
import { useRouter } from '@happysanta/router'
import { useAppSelector } from 'hooks/redux'
import { selectIsDisabledChangeDirectionSequence } from 'store/selectors/tableOptions'
import { SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'

import { IndicatorTableOptionsSequence } from './IndicatorTableOptionsSequence'
import { POPUPS } from 'router/popups'
import { useSetAnchorElement } from 'components/layout/popouts/PopoutContext'

export const CellTableOptionsSequence: React.FC = () => {
   const router = useRouter()
   const setElement = useSetAnchorElement()
   const cellRef = React.useRef<HTMLElement | null>(null)

   const isDisabledChangeDirectionSequence = useAppSelector(selectIsDisabledChangeDirectionSequence)

   const onClickTableSequence = () => {
      setElement(cellRef.current)
      router.pushPopup(POPUPS.ACTION_SHEET_TABLE_SEQUENCE)
   }

   return (
      <SimpleCell
         getRootRef={cellRef}
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         expandable
         disabled={isDisabledChangeDirectionSequence}
         subtitle={isDisabledChangeDirectionSequence && 'Недоступно'}
         indicator={<IndicatorTableOptionsSequence />}
         onClick={onClickTableSequence}
      >
         Порядок символов
      </SimpleCell>
   )
}
