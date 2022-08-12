import React from 'react'
import { Group, Panel, PanelHeaderBack, PanelProps } from '@vkontakte/vkui'
import { useRouter } from '@happysanta/router'

import { GroupSettingsHintsStyle } from 'components/ui/groups/settingsHintsStyle/GroupSettingsHintsStyle'
import { PanelHeaderSeparator } from 'components/ui/PanelHeaderSeparator/PanelHeaderSeparator'

export const PanelSettingsHintsStyle: React.FC<PanelProps> = (panelProps) => {
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
            <GroupSettingsHintsStyle />
         </Group>
      </Panel>
   )
}
