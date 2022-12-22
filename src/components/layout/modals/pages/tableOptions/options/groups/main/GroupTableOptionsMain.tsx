import React from 'react'
import { Separator, SimpleCell, Switch } from '@vkontakte/vkui'

import { CellTableOptionsMainVariant } from './cells/variant/CellTableOptionsMainVariant'

import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { CellTableOptionsSequence } from './cells/sequence/CellTableOptionsSequence'
import { CellTableOptionsIsShuffleCells } from './cells/shuffle/CellTableOptionsIsShuffleCells'
import { CellTableOptionsSize } from './cells/size/CellTableOptionsSize'
import { CellTableOptionsIsColoredSymbols } from './cells/coloredSymbols/CellTableOptionsIsColoredSymbols'
// import { CellTableOptionsTransforms } from './cells/transforms/CellTableOptionsTransforms'
import { CellTableOptionsIsShowTableTime } from './cells/tableTime/CellTableOptionsIsShowTableTime'
import { CellTableOptionsStyleSelected } from './cells/styleSelected/CellTableOptionsStyleSelected'
import { CellTableOptionsIsShowCurrentSymbol } from './cells/currentSymbol/CellTableOptionsIsShowCurrentSymbol'
import { CellTableOptionsUpdateColorsAfterSelect } from './cells/updateColors/CellTableOptionsUpdateColorsAfterSelect'

export const GroupTableOptionsMain: React.FC = () => {
   return (
      <>
         <GroupCard>
            <CellTableOptionsSize />
            <Separator wide />
            <CellTableOptionsMainVariant />
            <Separator wide />
            <CellTableOptionsSequence />
            <Separator wide />
            <SimpleCell disabled after={<Switch />}>
               Нажимать на символы
            </SimpleCell>
         </GroupCard>

         <GroupCard>
            <CellTableOptionsIsShuffleCells />
            <Separator wide />
            {/*  <CellTableOptionsTransforms />
            <Separator wide /> */}
            <CellTableOptionsStyleSelected />
         </GroupCard>
         <GroupCard>
            <CellTableOptionsIsColoredSymbols />
            <Separator wide />
            <CellTableOptionsUpdateColorsAfterSelect />
         </GroupCard>
         <GroupCard>
            <CellTableOptionsIsShowCurrentSymbol />
            <Separator wide />
            <CellTableOptionsIsShowTableTime />
         </GroupCard>
      </>
   )
}
