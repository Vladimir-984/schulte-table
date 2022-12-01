import React from 'react'
import { Group, Panel, PanelHeaderBack, PanelProps } from '@vkontakte/vkui'
import { useRouter } from '@happysanta/router'
import { PanelHeaderSeparator } from 'components/ui/PanelHeaderSeparator/PanelHeaderSeparator'
import { GroupHintsOptionsEnabled } from './groups/enabled/GroupHintsOptionsEnabled'
import { GroupHintsOptionsParams } from './groups/params/GroupHintsOptionsParams'

export const PanelHintsOptions: React.FC<PanelProps> = (panelProps) => {
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
            <GroupHintsOptionsEnabled />
            <GroupHintsOptionsParams />
         </Group>
      </Panel>
   )
}
