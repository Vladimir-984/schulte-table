import React from 'react'
import { Header, Separator } from '@vkontakte/vkui'
import { CellTableOptionsMainType } from './cells/type/CellTableOptionsMainType'
import { CellTableOptionsMainVariant } from './cells/variant/CellTableOptionsMainVariant'
import { CellTableOptionsMainMode } from './cells/mode/CellTableOptionsMainMode'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'

export const GroupTableOptionsMain: React.FC = () => {
   return (
      <GroupCard header={<Header mode='secondary'>Основные</Header>}>
         <CellTableOptionsMainType />
         <Separator wide />
         <CellTableOptionsMainVariant />
         <Separator wide />
         <CellTableOptionsMainMode />
      </GroupCard>
   )
}
