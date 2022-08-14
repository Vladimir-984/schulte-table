import React from 'react'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { CellSettingsHintsEnabled } from './cells/CellSettingsHintsEnabled'

export const GroupSettingsHintsEnabled: React.FC = () => {
   return (
      <GroupCard description='Если вы испытываете трудности с поиском символов, вы можете включить подсказки'>
         <CellSettingsHintsEnabled />
      </GroupCard>
   )
}
