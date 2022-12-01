import React from 'react'
import { Group, Panel, PanelHeaderBack, PanelProps } from '@vkontakte/vkui'
import { useRouter } from '@happysanta/router'
import { PanelHeaderSeparator } from 'components/ui/PanelHeaderSeparator/PanelHeaderSeparator'
import { GroupHintsOptionsStyle } from './groups/style/GroupHintsOptionsStyle'

export const PanelHintsOptionsStyle: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()

   const onClickBack = () => {
      router.popPage()
   }

   return (
      <Panel {...panelProps}>
         <PanelHeaderSeparator before={<PanelHeaderBack onClick={onClickBack} label='Подсказки' />}>
            Стиль
         </PanelHeaderSeparator>
         <Group separator='hide'>
            <GroupHintsOptionsStyle />
         </Group>
      </Panel>
   )
}
