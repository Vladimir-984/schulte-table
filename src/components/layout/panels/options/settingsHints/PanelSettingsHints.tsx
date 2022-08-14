import React from 'react'
import { Group, Panel, PanelHeaderBack, PanelProps } from '@vkontakte/vkui'
import { useRouter } from '@happysanta/router'
import { PanelHeaderSeparator } from 'components/ui/PanelHeaderSeparator/PanelHeaderSeparator'
import { GroupSettingsHintsEnabled } from './groups/enabled/GroupSettingsHintsEnabled'
import { GroupSettingsHintsParams } from './groups/params/GroupSettingsHintsParams'

export const PanelSettingsHints: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()

   const onClickBack = () => {
      router.popPage()
   }

   return (
      <Panel {...panelProps}>
         <PanelHeaderSeparator before={<PanelHeaderBack onClick={onClickBack} label='Настройки' />}>
            Подсказки
         </PanelHeaderSeparator>

         <Group separator='hide'>
            <GroupSettingsHintsEnabled />
            <GroupSettingsHintsParams />
         </Group>
      </Panel>
   )
}
