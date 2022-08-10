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

         <Group mode='plain'></Group>
      </Panel>
   )
}
