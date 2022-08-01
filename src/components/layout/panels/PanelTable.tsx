import React from 'react'
import { useRouter } from '@happysanta/router'
import {
   Button,
   ButtonGroup,
   Card,
   CardGrid,
   Div,
   FixedLayout,
   Group,
   Panel,
   PanelHeader,
   PanelHeaderBack,
   PanelProps,
   PromoBanner,
   Separator,
   SimpleCell,
   Switch,
   Title,
} from '@vkontakte/vkui'
import {
   Icon16ClockOutline,
   Icon20ClockOutline,
   Icon24ClockOutline,
   Icon24RefreshOutline,
   Icon28ClockCircleFillGray,
   Icon28ClockOutline,
   Icon28RefreshOutline,
   Icon28SearchOutline,
} from '@vkontakte/icons'
import { TableView } from 'components/ui/TableView/TableView'
import { defaultPromoBannerData } from 'utils/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'

export const PanelTable: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()

   const onClickBack = () => {
      router.popPage()
   }
   return (
      <Panel {...panelProps} className='Panel--no-tabbar'>
         <PanelHeader before={<PanelHeaderBack onClick={onClickBack} />} separator={false}>
            Таблица
         </PanelHeader>
         <FixedLayout vertical='top'>
            <Separator wide />
         </FixedLayout>
         <Group separator='hide' className='TableGroup'>
            <Timer />
            <SearchElement />
            <TableView />
            {/*  <Div>
               <Button
                  align='center'
                  size='m'
                  activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                  before={<Icon28RefreshOutline />}
               >
                  Заново
               </Button>
            </Div> */}
         </Group>
         <div style={{ visibility: 'hidden' }}>
            <PromoBanner bannerData={defaultPromoBannerData} onClose={() => {}} />
         </div>
         <FixedLayout vertical='bottom'>
            <PromoBanner bannerData={defaultPromoBannerData} onClose={() => {}} />
         </FixedLayout>
      </Panel>
   )
}

const format = new Intl.DateTimeFormat(undefined, {
   fractionalSecondDigits: 2,
   timeZone: 'UTC',
   minute: '2-digit',
   second: '2-digit',
})
export const Timer = () => {
   const startRef = React.useRef(Date.now())

   const [timer, setTimer] = React.useState<string | number>(0)
   //    const [mili, setMili] = React.useState<number>(0)

   //    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)
   const frameRef = React.useRef<number | null>(null)

   React.useEffect(() => {
      //   timeoutRef.current = setInterval(() => {
      //      const a = ((Date.now() - startRef.current) / 1000).toFixed(2)
      //     }, 50)

      frameRef.current = requestAnimationFrame(updateTimer)

      return () => {
         if (frameRef.current !== null) {
            cancelAnimationFrame(frameRef.current)
         }
         //  if (timeoutRef.current !== null) {
         //     clearInterval(timeoutRef.current)
         //  }
      }
   }, [])

   const iconRef = React.useRef<HTMLDivElement>(null)

   const updateTimer = React.useCallback(() => {
      const mili = Date.now() - startRef.current
      const seconds = mili / 1000

      const minute = Math.floor(seconds / 60)
      const second = Math.floor(seconds % 60)

      const secTime = `${second} с`
      const minTime = minute > 0 ? `${minute} м` : ''

      const time = `${minTime} ${secTime}`
      //   const time = `${Math.floor(seconds / 60)}:${(seconds % 60).toFixed(2)}`

      setTimer(time)

      //   setMili(mili)
      frameRef.current = requestAnimationFrame(updateTimer)
   }, [])

   return (
      <div
         style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 12px',
            // marginBottom: 'auto',
         }}
      >
         <div style={{ display: 'flex', alignItems: 'center' }}>
            <Icon24ClockOutline fill='var(--vkui--color_icon_accent)' />
            <Title
               level='2'
               weight='2'
               style={{
                  marginLeft: 4,
                  color: 'var(--vkui--color_text_secondary)',
                  // color: 'var(--vkui--color_text_subhead)',
                  //   color: 'var(--vkui--color_text_tertiary)',
               }}
            >
               {timer}
            </Title>
            {/* <span style={{ marginLeft: 4 }}>{format.format(mili)}</span> */}
         </div>
         <Button
            mode='secondary'
            appearance='accent'
            className='Button--round Tappable--active-opacity'
            align='center'
            size='m'
            activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
            before={<Icon24RefreshOutline />}
         >
            Заново
         </Button>
      </div>
   )
}

export const SearchElement = () => {
   return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px 12px' }}>
         <Title level='2' weight='2'>
            Найдите:
         </Title>
         <Title level='2' weight='2' style={{ marginLeft: 4 }}>
            3
         </Title>
      </div>
   )
}
