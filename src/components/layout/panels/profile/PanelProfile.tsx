import React from 'react'
import { useRouter } from '@happysanta/router'
import { Icon12ArrowUpRight } from '@vkontakte/icons'
import {
   Avatar,
   Card,
   CardGrid,
   FixedLayout,
   FormItem,
   Group,
   Header,
   Panel,
   PanelHeader,
   PanelProps,
   RichCell,
   SegmentedControl,
   Separator,
   SimpleCell,
} from '@vkontakte/vkui'

import { Icon24DoneOutline, Icon24CancelOutline, Icon24SearchOutline } from '@vkontakte/icons'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { TableCellSymbol } from 'components/ui/TableCellSymbol/TableCellSymbol'
import { TableCellBackground } from 'components/ui/TableCellBackground/TableCellBackground'
import { getRandomColor } from 'utils/color'

export const PanelProfile: React.FC<PanelProps> = (panelProps) => {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const router = useRouter()

   return (
      <Panel {...panelProps}>
         <PanelHeader separator={false}>Профиль</PanelHeader>
         <FixedLayout vertical='top' filled>
            <Separator wide />
         </FixedLayout>

         <Group>
            <Group mode='plain'>
               <CardGrid size='l'>
                  <Card>
                     <RichCell before={<Avatar size={48} />} activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}>
                        user
                     </RichCell>
                  </Card>
               </CardGrid>
            </Group>

            <StatsClicks />

            <Group mode='plain' header={<Header mode='secondary'>Нажатия</Header>}>
               <SimpleCell indicator={'3К'}>Всего</SimpleCell>
               <SimpleCell indicator={'2.8К'}>Правильные</SimpleCell>
               <SimpleCell indicator={'212'}>Неправильные</SimpleCell>
               <SimpleCell indicator={percentFormat.format(2800 / 3000)}>Точность</SimpleCell>
            </Group>
            <Group mode='plain'>
               <SimpleCell indicator={'140'}>Завершено таблиц</SimpleCell>
            </Group>
         </Group>
      </Panel>
   )
}
const percentFormat = new Intl.NumberFormat(undefined, {
   style: 'percent',
   minimumFractionDigits: 2,
   maximumFractionDigits: 2,
})
const StatsClicks: React.FC = () => {
   return (
      <Group mode='plain'>
         <SimpleCell
            before={
               <Avatar size={48} shadow={false} mode='image'>
                  <TableCellBackground background={{ backgroundColorMode: 'red' }}>
                     <TableCellSymbol value='12' colorMode='white' />
                  </TableCellBackground>
               </Avatar>
            }
            after={<Icon24DoneOutline width={28} height={28} fill='green' />}
         >
            4.21с
         </SimpleCell>
         <SimpleCell
            before={
               <Avatar size={48} shadow={false} mode='image'>
                  <Icon24SearchOutline width={28} height={28} />
               </Avatar>
            }
         >
            3.42с
         </SimpleCell>
         <SimpleCell
            before={
               <Avatar size={48} shadow={false} mode='image'>
                  <TableCellBackground background={{ backgroundColorMode: 'black' }}>
                     <TableCellSymbol value='12' colorMode='white' />
                  </TableCellBackground>
               </Avatar>
            }
            after={<Icon24CancelOutline width={28} height={28} fill='red' />}
         ></SimpleCell>
         <SimpleCell
            before={
               <Avatar size={48} shadow={false} mode='image'>
                  <TableCellBackground
                     background={{
                        backgroundColorMode: 'custom',
                        // backgroundColor: getRandomColor()
                     }}
                  >
                     <TableCellSymbol value='24' colorMode='white' />
                  </TableCellBackground>
               </Avatar>
            }
            after={<Icon24DoneOutline width={28} height={28} fill='green' />}
         >
            1.78с
         </SimpleCell>
      </Group>
   )
}
