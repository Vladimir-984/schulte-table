import React from 'react'
import { Card, CardGrid, Group, Panel, PanelHeaderBack, PanelProps, Separator, SimpleCell } from '@vkontakte/vkui'
import { useRouter } from '@happysanta/router'
import { Icon28DoneOutline } from '@vkontakte/icons'
import { PanelHeaderSeparator } from 'components/ui/PanelHeaderSeparator/PanelHeaderSeparator'
import { ListHintsTimeoutItems } from 'components/ui/lists/ListHintsTimeoutItems'

export const PanelSettingsHintsTimeout: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()

   const onClickBack = () => {
      router.popPage()
   }

   return (
      <Panel {...panelProps}>
         <PanelHeaderSeparator before={<PanelHeaderBack onClick={onClickBack} label='Подсказки' />}>
            Тайм-аут
         </PanelHeaderSeparator>
         <Group separator='hide'>
            <Group mode='plain' separator='hide'>
               <CardGrid size='l'>
                  <Card>
                     <ListHintsTimeoutItems />
                  </Card>
               </CardGrid>
            </Group>
         </Group>
      </Panel>
   )
}
