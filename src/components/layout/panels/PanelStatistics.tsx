import { useRouter } from '@happysanta/router'
import {
   Icon24SquareGrid3x3,
   Icon28GraphOutline,
   Icon28ListOutline,
   Icon28SpeedometerMaxOutline,
   Icon28SpeedometerMiddleOutline,
   Icon28SpeedometerStartOutline,
   Icon28TablecellsOutline,
} from '@vkontakte/icons'
import {
   Button,
   Card,
   CardGrid,
   FixedLayout,
   Group,
   Header,
   HorizontalScroll,
   Panel,
   PanelHeader,
   PanelProps,
   Placeholder,
   Separator,
   SimpleCell,
   Tabs,
   TabsItem,
} from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import React from 'react'

export const PanelStatistics: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()

   return (
      <Panel {...panelProps}>
         <PanelHeader separator={false}>Статистика</PanelHeader>
         <FixedLayout vertical='top' filled>
            <Tabs mode='default'>
               <HorizontalScroll>
                  <div style={{ display: 'flex' }}>
                     <TabsItem selected>Числа</TabsItem>
                     <TabsItem>Числа</TabsItem>
                     <TabsItem>Числа</TabsItem>
                     <TabsItem>Числа</TabsItem>
                     <TabsItem>Числа</TabsItem>
                     <TabsItem>Числа</TabsItem>
                  </div>
               </HorizontalScroll>
            </Tabs>
            <Separator wide />
         </FixedLayout>
         <div style={{ visibility: 'hidden' }}>
            <Tabs mode='default'>
               <HorizontalScroll>
                  <div style={{ display: 'flex' }}>
                     <TabsItem selected>Числа</TabsItem>
                     <TabsItem>Числа</TabsItem>
                     <TabsItem>Числа</TabsItem>
                     <TabsItem>Числа</TabsItem>
                     <TabsItem>Числа</TabsItem>
                     <TabsItem>Числа</TabsItem>
                  </div>
               </HorizontalScroll>
            </Tabs>
            <Separator wide />
         </div>
         <Group mode='plain'>
            <Group mode='plain' header={<Header mode='secondary'>3x3</Header>}>
               <SimpleCell before={<Icon28SpeedometerStartOutline />}></SimpleCell>
               <SimpleCell before={<Icon28SpeedometerMiddleOutline />}></SimpleCell>
               <SimpleCell before={<Icon28SpeedometerMaxOutline />}></SimpleCell>
            </Group>
            <Group mode='plain' header={<Header mode='secondary'>4x4</Header>}>
               <SimpleCell before={<Icon28SpeedometerStartOutline />}></SimpleCell>
               <SimpleCell before={<Icon28SpeedometerMiddleOutline />}></SimpleCell>
               <SimpleCell before={<Icon28SpeedometerMaxOutline />}></SimpleCell>
            </Group>
            <Group mode='plain' header={<Header mode='secondary'>5x5</Header>}>
               <CardGrid size='l'>
                  <Card>
                     <SimpleCell indicator={5} before={<Icon28TablecellsOutline width={28} height={28} />}>
                        Решено таблиц
                     </SimpleCell>
                     <Separator wide />
                     <SimpleCell expandable before={<Icon28ListOutline width={28} height={28} />}>
                        Статистика по дням
                     </SimpleCell>
                     {/* <Separator wide />
                     <SimpleCell before={<Icon28SpeedometerStartOutline />}></SimpleCell>
                     <Separator wide />
                     <SimpleCell before={<Icon28SpeedometerMiddleOutline />}></SimpleCell>
                     <Separator wide />
                     <SimpleCell before={<Icon28SpeedometerMaxOutline />}></SimpleCell> */}
                  </Card>
               </CardGrid>
            </Group>
            <Group mode='plain' header={<Header mode='secondary'>6x6</Header>}>
               <Placeholder
                  icon={<Icon28GraphOutline width={56} height={56} />}
                  header='Результатов нет'
                  action={
                     <Button size='l' activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY} className='Button--round'>
                        Начать
                     </Button>
                  }
               ></Placeholder>
            </Group>
         </Group>
      </Panel>
   )
}
