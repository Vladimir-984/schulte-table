import React from 'react'
import { FixedLayout, Group, Panel, PanelHeader, PanelHeaderBack, PanelProps, Separator } from '@vkontakte/vkui'
import { useRouter } from '@happysanta/router'

export const PanelAbout: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()

   const onClickBack = () => {
      router.popPage()
   }
   return (
      <Panel {...panelProps}>
         <PanelHeader before={<PanelHeaderBack onClick={onClickBack} />}>О приложении</PanelHeader>
         <FixedLayout vertical='top'>
            <Separator wide />
         </FixedLayout>
         <Group>
            <Group>about</Group>
         </Group>
      </Panel>
   )
}
