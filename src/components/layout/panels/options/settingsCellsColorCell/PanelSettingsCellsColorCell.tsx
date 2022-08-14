import React from 'react'
import { useRouter } from '@happysanta/router'
import { Group, Panel, PanelHeaderBack, PanelProps } from '@vkontakte/vkui'
import { PanelHeaderSeparator } from 'components/ui/PanelHeaderSeparator/PanelHeaderSeparator'
import { GroupSettingsCellsColorCell } from './groups/GroupSettingsCellsColorCell'

export const PanelSettingsCellsColorCell: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()
   const onClickBack = () => {
      router.popPage()
   }

   return (
      <Panel {...panelProps}>
         <PanelHeaderSeparator before={<PanelHeaderBack onClick={onClickBack} label={'TODO'} />}>
            Цвет ячеек
         </PanelHeaderSeparator>
         <Group separator='hide'>
            <GroupSettingsCellsColorCell />
         </Group>
      </Panel>
   )
}
