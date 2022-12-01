import React from 'react'
import { Group, Panel, PanelHeaderBack, PanelProps } from '@vkontakte/vkui'
import { useRouter } from '@happysanta/router'
import { PanelHeaderSeparator } from 'components/ui/PanelHeaderSeparator/PanelHeaderSeparator'
import { GroupTableDisplayOptionsCellsShape } from './groups/cellsShape/GroupTableDisplayOptionsCellsShape'

export const PanelTableDisplayOptionsCellsShape: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()
   const onClickBack = () => {
      router.popPage()
   }
   return (
      <Panel {...panelProps}>
         <PanelHeaderSeparator before={<PanelHeaderBack onClick={onClickBack} label={'Отображение'} />}>
            Форма ячеек
         </PanelHeaderSeparator>
         <Group separator='hide'>
            <GroupTableDisplayOptionsCellsShape />
         </Group>
      </Panel>
   )
}
