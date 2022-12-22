import React from 'react'
import { Button, ButtonGroup, Group, Panel, PanelHeaderButton, PanelProps, Tappable } from '@vkontakte/vkui'

import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { Icon28SettingsOutline } from '@vkontakte/icons'
import { useRouter } from '@happysanta/router'
import { PAGE_OPTIONS, PAGE_TABLE } from 'router/pages'

import { MODAL_PAGES } from 'router/modals'
import { PanelHeaderSeparator } from 'components/ui/PanelHeaderSeparator/PanelHeaderSeparator'
import { useAppDispatch } from 'hooks/redux'
import { startTable } from 'store/asyncThunks/activeTable'

export const PanelMain: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()

   const onClickSettings = () => {
      router.pushPage(PAGE_OPTIONS)
   }

   return (
      <Panel {...panelProps}>
         <PanelHeaderSeparator
            before={
               <PanelHeaderButton aria-label='a' onClick={onClickSettings}>
                  <Icon28SettingsOutline />
               </PanelHeaderButton>
            }
         >
            Таблицы Шульте
         </PanelHeaderSeparator>
         <Content />
      </Panel>
   )
}

const Content = () => {
   return (
      <Group separator='hide' className='Group--full-height'>
         <div style={{ marginBottom: 'auto' }}></div>
         <MainButtons />
      </Group>
   )
}

const MainButtons: React.FC = () => {
   return (
      <ButtonGroup stretched align='center' mode='vertical' className='ButtonGroup--h-pad ButtonGroup--max-w350'>
         <ButtonStart />
         <ButtonTableOptions />
      </ButtonGroup>
   )
}
const ButtonStart: React.FC = () => {
   const router = useRouter()
   const dispatch = useAppDispatch()

   const onClickStart = () => {
      dispatch(startTable()).then(() => router.pushPage(PAGE_TABLE))
   }

   return (
      <Button
         stretched
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         className='Button--round Button--stretched-content Tappable--active-opacity'
         size='l'
         mode='primary'
         appearance='accent'
         onClick={onClickStart}
      >
         Начать
      </Button>
   )
}

const ButtonTableOptions: React.FC = () => {
   const router = useRouter()
   // const dispatch = useAppDispatch()

   const onClickTableOptions = () => {
      // dispatch(startTable()).then(() => router.pushPage(PAGE_TABLE))
      router.pushModal(MODAL_PAGES.TABLE_OPTIONS)
   }

   return (
      <Button
         stretched
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         className='Button--round Button--stretched-content Tappable--active-opacity'
         size='l'
         mode='tertiary'
         appearance='accent'
         onClick={onClickTableOptions}
      >
         Параметры
      </Button>
   )
}

/* const ButtonStart = () => {
      const router = useRouter()
      const dispatch = useAppDispatch()
      const onClickStart = () => {
         dispatch(startTable()).then(() => router.pushPage(PAGE_TABLE))
      }
   
      const onClickTableParams: React.MouseEventHandler = (e) => {
         e.stopPropagation()
         router.pushModal(MODAL_PAGES.TABLE_OPTIONS)
      }
   
      return (
         <ButtonGroup stretched align='center' mode='vertical' className='ButtonGroup--h-pad ButtonGroup--max-w350'>
            <Button
               stretched
               activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
               className='Button--round Button--stretched-content Tappable--active-opacity'
               size='l'
               mode='primary'
               appearance='accent'
               onClick={onClickStart}
               before={
                  <div style={{ visibility: 'hidden' }}>
                     <Icon28SettingsOutline />
                  </div>
               }
               after={
                  <Tappable
                     activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                     activeMode='opacity'
                     hoverMode='opacity'
                     onClick={onClickTableParams}
                  >
                     <Icon28SettingsOutline />
                  </Tappable>
               }
            >
               Начать
            </Button>
         </ButtonGroup>
      )
   } */
