import React from 'react'
import { useRouter } from '@happysanta/router'
import { Group, Panel, PanelHeaderBack, PanelProps } from '@vkontakte/vkui'
import { PanelHeaderSeparator } from 'components/ui/PanelHeaderSeparator/PanelHeaderSeparator'
import { GroupSettingsCellsColorSymbol } from './groups/GroupSettingsCellsColorSymbol'

export const PanelSettingsCellsColorSymbol: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()
   const onClickBack = () => {
      router.popPage()
   }

   return (
      <Panel {...panelProps}>
         <PanelHeaderSeparator before={<PanelHeaderBack onClick={onClickBack} label={'TODO'} />}>
            Цвет символов
         </PanelHeaderSeparator>
         <Group separator='hide'>
            <GroupSettingsCellsColorSymbol />
         </Group>
      </Panel>
   )
}
