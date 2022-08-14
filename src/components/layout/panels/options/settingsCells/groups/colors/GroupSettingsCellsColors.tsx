import React from 'react'
import { Separator } from '@vkontakte/vkui'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { CellSettingsCellsColorSymbol } from './cells/CellSettingsCellsColorSymbol'
import { CellSettingsCellsColorCell } from './cells/CellSettingsCellsColorCell'

export const GroupSettingsCellsColors: React.FC = () => {
   return (
      <GroupCard description='TODO: написать описание'>
         <CellSettingsCellsColorCell />
         <Separator wide />
         <CellSettingsCellsColorSymbol />
      </GroupCard>
   )
}
