import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useRouter } from '@happysanta/router'

import { IndicatorTableOptionsSize } from './IndicatorTableOptionsSize'
import { useSetAnchorElement } from 'components/layout/popouts/PopoutContext'
import { POPUPS } from 'router/popups'

export const CellTableOptionsSize: React.FC = () => {
   const router = useRouter()
   const setElement = useSetAnchorElement()
   const cellRef = React.useRef<HTMLElement | null>(null)

   const onClickTableSize: React.MouseEventHandler<HTMLElement> = (e) => {
      setElement(cellRef.current)
      router.pushPopup(POPUPS.ACTION_SHEET_TABLE_SIZE)
   }

   return (
      <SimpleCell
         getRootRef={cellRef}
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         indicator={<IndicatorTableOptionsSize />}
         expandable
         onClick={onClickTableSize}
      >
         Размер
      </SimpleCell>
   )
}
