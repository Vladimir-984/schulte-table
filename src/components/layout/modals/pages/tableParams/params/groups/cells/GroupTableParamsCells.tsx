import React from 'react'
import { Header, Separator } from '@vkontakte/vkui'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { CellTableParamsCellsFlipHorizontally } from './cells/CellTableParamsCellsFlipHorizontally'
import { CellTableParamsCellsFlipVertically } from './cells/CellTableParamsCellsFlipVertically'
import { CellTableParamsCellsShuffle } from './cells/CellTableParamsCellsShuffle'
import { useAppSelector } from 'hooks/redux'
import { selectShownOtherParams } from 'store/selectors/tableParams'

export const GroupTableParamsCells: React.FC = () => {
   const shownOtherParams = useAppSelector(selectShownOtherParams)
   if (!shownOtherParams) return null
   return (
      <GroupCard header={<Header mode='secondary'>Ячейки</Header>}>
         <CellTableParamsCellsShuffle />
         <Separator wide />
         <CellTableParamsCellsFlipHorizontally />
         <Separator wide />
         <CellTableParamsCellsFlipVertically />
      </GroupCard>
   )
}
