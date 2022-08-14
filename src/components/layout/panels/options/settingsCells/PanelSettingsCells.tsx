import React from 'react'
import { Group, Panel, PanelHeaderBack, PanelProps } from '@vkontakte/vkui'
import { useRouter } from '@happysanta/router'

import { PanelHeaderSeparator } from 'components/ui/PanelHeaderSeparator/PanelHeaderSeparator'
import { GroupSettingsCellsColors } from './groups/colors/GroupSettingsCellsColors'
import { GroupSettingsCellsMarkSelected } from './groups/markSelected/GroupSettingsCellsMarkSelected'
import { GroupSettingsCellsShowMistakes } from './groups/showMistakes/GroupSettingsCellsShowMistakes'

export const PanelSettingsCells: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()

   const onClickBack = () => {
      router.popPage()
   }

   return (
      <Panel {...panelProps}>
         <PanelHeaderSeparator before={<PanelHeaderBack onClick={onClickBack} label={'Настройки'} />}>
            Ячейки
         </PanelHeaderSeparator>

         <Group separator='hide'>
            <GroupSettingsCellsColors />
            <GroupSettingsCellsMarkSelected />
            <GroupSettingsCellsShowMistakes />
         </Group>
      </Panel>
   )
}
