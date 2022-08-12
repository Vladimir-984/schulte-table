import React from 'react'
import { Group, Panel, PanelHeaderBack, PanelProps } from '@vkontakte/vkui'
import { useRouter } from '@happysanta/router'
import { PanelHeaderSeparator } from 'components/ui/PanelHeaderSeparator/PanelHeaderSeparator'
import { GroupSettingsHintsActive } from 'components/ui/groups/settingsHints/GroupSettingsHintsActive'
import { GroupSettingsHintsParams } from 'components/ui/groups/settingsHints/GroupSettingsHintsParams'

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
            <GroupSettingsHintsActive />
            <GroupSettingsHintsParams />
         </Group>
      </Panel>
   )
}
