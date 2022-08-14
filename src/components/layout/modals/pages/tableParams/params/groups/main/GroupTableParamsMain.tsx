import React from 'react'
import { Header, Separator } from '@vkontakte/vkui'
import { CellTableParamsMainType } from './cells/CellTableParamsMainType'
import { CellTableParamsMainVariant } from './cells/CellTableParamsMainVariant'
import { CellTableParamsMainMode } from './cells/CellTableParamsMainMode'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'

export const GroupTableParamsMain: React.FC = () => {
   return (
      <GroupCard header={<Header mode='secondary'>Основные</Header>}>
         <CellTableParamsMainType />
         <Separator wide />
         <CellTableParamsMainVariant />
         <Separator wide />
         <CellTableParamsMainMode />
      </GroupCard>
   )
}
