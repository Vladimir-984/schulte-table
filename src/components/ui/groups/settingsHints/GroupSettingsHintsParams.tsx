import React from 'react'
import {
   Card,
   CardGrid,
   // classNames,
   Group,
   Header,
   Separator,
} from '@vkontakte/vkui'
import { CellSettingsHintsStyle } from 'components/ui/listCells/settingsHints/CellSettingsHintsStyle'
import { CellSettingsHintsTimeout } from 'components/ui/listCells/settingsHints/CellSettingsHintsTimeout'
import { useAppSelector } from 'hooks/redux'
import { selectHintsIsActive } from 'store/selectors/tableSettings'

export const GroupSettingsHintsParams: React.FC = () => {
   const hintsIsActive = useAppSelector(selectHintsIsActive)

   /*     const [shown, setShown] = React.useState(hintsIsActive)

   const [animation, setAnimation] = React.useState<'show' | 'hide' | null>(null)

   React.useEffect(() => {
      if (hintsIsActive) {
         setAnimation('show')
      } else if (!hintsIsActive) {
         setAnimation('hide')
      }
   }, [hintsIsActive])

   const onAnimationEnd: React.AnimationEventHandler = (e) => {
      if (e.animationName === 'group-scale-show') {
         // setShown(true)
         setAnimation(null)
      } else if (e.animationName === 'group-scale-hide') {
         // setShown(false)
         setAnimation(null)
      }
   }

   if (!hintsIsActive && !animation) return <></> */

   if (!hintsIsActive) return <></>

   return (
      <Group
         // onAnimationEnd={onAnimationEnd}
         // className={classNames(animation && `Group--animation-${animation}`)}
         mode='plain'
         separator='hide'
         header={<Header mode='secondary'>Параметры</Header>}
      >
         <CardGrid size='l'>
            <Card>
               <CellSettingsHintsStyle />
               <Separator wide />
               <CellSettingsHintsTimeout />
            </Card>
         </CardGrid>
      </Group>
   )
}
