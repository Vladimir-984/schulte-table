import React from 'react'
import { Header, Separator, SimpleCell, Switch } from '@vkontakte/vkui'

import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { CellTableOptionsAdditionallySize } from './cells/size/CellTableOptionsAdditionallySize'

import { useAppSelector } from 'hooks/redux'
import { selectIsShownAdditionalOptions } from 'store/selectors/tableOptions'

import { CellTableOptionsCellsShuffle } from './cells/shuffle/CellTableOptionsCellsShuffle'
import { CellTableOptionsCellsFlipHorizontally } from './cells/flipHorizontally/CellTableOptionsCellsFlipHorizontally'
import { CellTableOptionsCellsFlipVertically } from './cells/flipVertically/CellTableOptionsCellsFlipVertically'
import { CellTableOptionsAdditionallyHideSelected } from './cells/hideSelected/CellTableOptionsAdditionallyHideSelected'
// import { CellTableOptionsAdditionallyChangeColorsAfterPress } from './cells/changeColorsAfterPress/CellTableOptionsAdditionallyChangeColorsAfterPress'
// import { CellTableOptionsAutochangeColors } from './cells/autochangeColors/CellTableOptionsAutochangeColors'
// import { CellTableOptionsAdditionallyColoredSymbols } from './cells/coloredSymbols/CellTableOptionsAdditionallyColoredSymbols'
// import { CellTableOptionsAdditionallyColoredCells } from './cells/coloredCells/CellTableOptionsAdditionallyColoredCells'

export const GroupTableOptionsAdditionally: React.FC = () => {
   const isShownAdditionalOptions = useAppSelector(selectIsShownAdditionalOptions)
   if (!isShownAdditionalOptions) return null

   return (
      <GroupCard
         header={<Header mode='secondary'>Дополнительные</Header>}
         /*  description={`Изменение порядка недоступно для варианта - "${TABLE_VARIANT[TableVariant.GORBOV]}"`} */
      >
         <CellTableOptionsAdditionallySize />
         <Separator wide />

         <CellTableOptionsAdditionallyHideSelected />
         <Separator wide />

         <CellTableOptionsCellsShuffle />
         <Separator wide />

         <CellTableOptionsCellsFlipHorizontally />
         <Separator wide />
         <CellTableOptionsCellsFlipVertically />
         {/* <CellTableOptionsAdditionallySequence /> */}
      </GroupCard>
   )
}
