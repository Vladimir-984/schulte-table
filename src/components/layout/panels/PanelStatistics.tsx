import { useRouter } from '@happysanta/router'
import { Group, Panel, PanelHeader, PanelProps } from '@vkontakte/vkui'
import React from 'react'

export const PanelStatistics: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()

   return (
      <Panel {...panelProps}>
         <PanelHeader separator={false}>Статистика</PanelHeader>

         <Group mode='plain'></Group>
      </Panel>
   )
}
