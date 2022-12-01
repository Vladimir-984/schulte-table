import React from 'react'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { CellTableDisplayOptionsCellsShape } from './cells/cellsShape/CellTableDisplayOptionsCellsShape'
import { Separator } from '@vkontakte/vkui'
import { CellTableDisplayOptionsCellsShadow } from './cells/cellsShadow/CellTableDisplayOptionsCellsShadow'

export const GroupTableDisplayOptionsCells: React.FC = () => {
   return (
      <GroupCard>
         <CellTableDisplayOptionsCellsShape />
         <Separator wide />
         <CellTableDisplayOptionsCellsShadow />
      </GroupCard>
   )
}
