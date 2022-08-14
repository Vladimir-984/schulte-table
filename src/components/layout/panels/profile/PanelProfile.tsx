import React from 'react'
import { useRouter } from '@happysanta/router'
import {} from '@vkontakte/icons'
import {
   Avatar,
   Card,
   CardGrid,
   FixedLayout,
   Group,
   Panel,
   PanelHeader,
   PanelProps,
   RichCell,
   Separator,
} from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'

export const PanelProfile: React.FC<PanelProps> = (panelProps) => {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const router = useRouter()

   return (
      <Panel {...panelProps}>
         <PanelHeader separator={false}>Профиль</PanelHeader>
         <FixedLayout vertical='top' filled>
            <Separator wide />
         </FixedLayout>

         <Group mode='plain'>
            <CardGrid size='l'>
               <Card>
                  <RichCell before={<Avatar size={48} />} activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}>
                     user
                  </RichCell>
               </Card>
            </CardGrid>
         </Group>
      </Panel>
   )
}
