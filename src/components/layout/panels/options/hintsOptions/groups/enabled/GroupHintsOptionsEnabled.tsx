import React from 'react'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { CellHintsOptionsEnabled } from './cells/CellHintsOptionsEnabled'

export const GroupHintsOptionsEnabled: React.FC = () => {
   return (
      <GroupCard description='Вы можете включить подсказки, если испытываете трудности с поиском символов'>
         <CellHintsOptionsEnabled />
      </GroupCard>
   )
}
