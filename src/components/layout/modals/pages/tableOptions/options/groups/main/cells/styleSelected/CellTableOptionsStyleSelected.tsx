import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useRouter } from '@happysanta/router'
import { POPUPS } from 'router/popups'
import { IndicatorTableOptionsStyleSelected } from './IndicatorTableOptionsStyleSelected'
import { useSetAnchorElement } from 'components/layout/popouts/PopoutContext'

export const CellTableOptionsStyleSelected: React.FC = () => {
   const router = useRouter()
   const setElement = useSetAnchorElement()
   const cellRef = React.useRef<HTMLElement | null>(null)

   const onClickStyleSelected = () => {
      setElement(cellRef.current)

      router.pushPopup(POPUPS.ACTION_SHEET_TABLE_STYLE_SELECTED)
   }

   return (
      <SimpleCell
         getRootRef={cellRef}
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         expandable
         indicator={<IndicatorTableOptionsStyleSelected />}
         onClick={onClickStyleSelected}
      >
         Стиль выбранных
      </SimpleCell>
   )
}
