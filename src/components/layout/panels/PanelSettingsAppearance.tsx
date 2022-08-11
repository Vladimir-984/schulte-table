import { useRouter } from '@happysanta/router'
import { Icon28DoneOutline } from '@vkontakte/icons'
import {
   Card,
   CardGrid,
   FixedLayout,
   Group,
   Panel,
   PanelHeader,
   PanelHeaderBack,
   PanelProps,
   Separator,
   SimpleCell,
} from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import React from 'react'
import { setAppearanceManual } from 'store/asyncThunks/application'
import { TypeApplicationAppearance } from 'store/slices/applicationSlice'

export const PanelSettingsAppearance: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()
   const dispatch = useAppDispatch()

   const appearance = useAppSelector((state) => state.application.appearance.type)

   const onClickBack = () => {
      router.popPage()
   }
   const onClickAppearance = (_appearance: TypeApplicationAppearance) => () => {
      if (_appearance !== appearance) dispatch(setAppearanceManual(_appearance))
   }

   return (
      <Panel {...panelProps}>
         <PanelHeader before={<PanelHeaderBack onClick={onClickBack} />} separator={false}>
            Тема
         </PanelHeader>
         <FixedLayout vertical='top'>
            <Separator wide />
         </FixedLayout>
         <Group separator='hide'>
            <Group mode='plain' separator='hide'>
               <CardGrid size='l'>
                  <Card>
                     <SimpleCell>Системная</SimpleCell>
                     <Separator wide />
                     <SimpleCell>Светлая</SimpleCell>
                     <Separator wide />
                     <SimpleCell
                        activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                        after={appearance === 'dark' && <Icon28DoneOutline />}
                        onClick={onClickAppearance('dark')}
                     >
                        Тёмная
                     </SimpleCell>
                  </Card>
               </CardGrid>
            </Group>
         </Group>
      </Panel>
   )
}
