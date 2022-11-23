import React from 'react'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { CellSettingsHintsEnabled } from './cells/CellSettingsHintsEnabled'

export const GroupSettingsHintsEnabled: React.FC = () => {
   return (
      <GroupCard description='Вы можете включить подсказки, если испытываете трудности с поиском символов'>
         <CellSettingsHintsEnabled />
      </GroupCard>
   )
}
