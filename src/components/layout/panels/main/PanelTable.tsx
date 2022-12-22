import React from 'react'
import { useRouter } from '@happysanta/router'
import { Avatar, Button, Div, Group, Panel, PanelHeaderBack, PanelProps, Progress, SimpleCell } from '@vkontakte/vkui'

import { TableView } from 'components/ui/TableView/TableView'
import {} from 'utils/vkui'

import { PanelHeaderSeparator } from 'components/ui/PanelHeaderSeparator/PanelHeaderSeparator'
import { TableHeader } from 'components/ui/TableHeader/TableHeader'
import {} from 'components/ui/VisibilityHidden/VisibilityHidden'
import { useAppSelector } from 'hooks/redux'
import { TableCellBackground } from 'components/ui/TableCellBackground/TableCellBackground'
import { TableCellSymbol } from 'components/ui/TableCellSymbol/TableCellSymbol'
import { selectActiveTableCurrentSequenceCell } from 'store/selectors/activeTable'
import {
   Icon28ClockOutline,
   Icon28PlaySpeedOutline,
   Icon28SpeedometerMiddleOutline,
   Icon28StopwatchOutline,
   Icon28TargetOutline,
} from '@vkontakte/icons'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { selectChangeableTableIsPressOnSymbols } from 'store/selectors/tableOptions'

export const PanelTable: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()

   const onClickBack = () => {
      router.popPage()
   }
   return (
      <Panel {...panelProps} className='Panel--no-tabbar'>
         <PanelHeaderSeparator before={<PanelHeaderBack onClick={onClickBack} />}>Таблица</PanelHeaderSeparator>
         {/* <ProgressTable /> */}

         <Group separator='hide' className='Group--full-height'>
            <TableHeader />

            <TableView />
            <ButtonFind />
         </Group>
         {/*      <Group>
            <Group separator='hide'>
               <SimpleCell before={<Icon28StopwatchOutline />} indicator={'1 м 15 с'}>
                  Время
               </SimpleCell>
               <SimpleCell before={<Icon28SpeedometerMiddleOutline />} indicator={'1.67 зн/с'}>
                  Скорость
               </SimpleCell>
               <SimpleCell before={<Icon28TargetOutline />} indicator={'98%'}>
                  Точноть
               </SimpleCell>
     
            </Group>
         </Group> */}
      </Panel>
   )
}

const ButtonFind = () => {
   const isPressOnSymbols = useAppSelector(selectChangeableTableIsPressOnSymbols)

   if (isPressOnSymbols) return null
   return (
      <Div>
         <Button activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY} stretched size='l' mode='outline'>
            Найден
         </Button>
      </Div>
   )
}

export const ProgressTable = () => {
   const ref = React.useRef<HTMLDivElement>(null)

   const handleRef = React.useRef<number>()

   const [value, setValue] = React.useState(100)
   const startedAt = React.useRef(Date.now())

   const date = new Date()
   date.setSeconds(date.getSeconds() + 5)

   const completedAt = React.useRef(date.getTime())

   const updateValue = () => {
      const v = ((completedAt.current - Date.now()) / (completedAt.current - startedAt.current)) * 100

      console.log(v)

      if (v <= 0) {
         setValue(0)
         if (handleRef.current !== undefined) {
            cancelAnimationFrame(handleRef.current)
         }

         // console.log(startedAt.current, completedAt.current, Date.now())

         return
      }
      if (ref.current) {
         //@ts-ignore
         ref.current.firstChild.style.width = `${v}%`
      }
      // setValue(v)

      handleRef.current = requestAnimationFrame(updateValue)
   }

   React.useEffect(() => {
      handleRef.current = requestAnimationFrame(updateValue)

      return () => {
         if (handleRef.current !== undefined) {
            cancelAnimationFrame(handleRef.current)
         }
      }
   }, [])

   return <Progress getRootRef={ref} value={value} />
}
