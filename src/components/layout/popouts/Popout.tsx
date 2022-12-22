import React from 'react'

import { useLocation } from '@happysanta/router'
import { PopoutRoot } from './PopoutRoot'
import { ActionSheetTableOptionsSize } from './actionSheets/ActionSheetTableOptionsSize'
import { ActionSheetTableOptionsSequence } from './actionSheets/ActionSheetTableOptionsSequence'

import { POPUPS } from 'router/popups'
import { ActionSheetTableOptionsStylesSelected } from './actionSheets/ActionSheetTableOptionsStylesSelected'

export const Popout: React.FC = () => {
   const activePopout = useLocation().getPopupId()

   return (
      <PopoutRoot activePopout={activePopout}>
         <ActionSheetTableOptionsSize nav={POPUPS.ACTION_SHEET_TABLE_SIZE} />
         <ActionSheetTableOptionsSequence nav={POPUPS.ACTION_SHEET_TABLE_SEQUENCE} />
         <ActionSheetTableOptionsStylesSelected nav={POPUPS.ACTION_SHEET_TABLE_STYLE_SELECTED} />
      </PopoutRoot>
   )
}
