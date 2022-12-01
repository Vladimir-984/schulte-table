import React from 'react'
import { Group, Panel, PanelHeaderBack, PanelProps } from '@vkontakte/vkui'
import { useRouter } from '@happysanta/router'
import { PanelHeaderSeparator } from 'components/ui/PanelHeaderSeparator/PanelHeaderSeparator'

import { GroupTableDisplayOptionsTime } from './groups/time/GroupTableDisplayOptionsTime'
import { GroupTableDisplayOptionsCells } from './groups/cells/GroupTableDisplayOptionsCells'

export const PanelTableDisplayOptions: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()
   const onClickBack = () => {
      router.popPage()
   }

   return (
      <Panel {...panelProps}>
         <PanelHeaderSeparator before={<PanelHeaderBack onClick={onClickBack} label={'Настройки'} />}>
            Отображение
         </PanelHeaderSeparator>

         <Group separator='hide'>
            <GroupTableDisplayOptionsTime />
            <GroupTableDisplayOptionsCells />

            {/*  <GroupCard
               header={
                  <Header mode='secondary' aside='...'>
                     Нажатия
                  </Header>
               }
            >
               <SimpleCell disabled after={<Switch />}>
                  Показывать верные
               </SimpleCell>
               <Separator wide />
               <SimpleCell disabled after={<Switch />}>
                  Показывать ошибки
               </SimpleCell>
            </GroupCard> */}
         </Group>
      </Panel>
   )
}
