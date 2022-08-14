import React from 'react'
import { Header, Separator } from '@vkontakte/vkui'
import { useAppSelector } from 'hooks/redux'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { selectIsEnabledHints } from 'store/selectors/tableSettings'
import { CellSettingsHintsStyle } from './cells/CellSettingsHintsStyle'
import { CellSettingsHintsTimeout } from './cells/CellSettingsHintsTimeout'

import { CSSTransition } from 'react-transition-group'

export const GroupSettingsHintsParams: React.FC = () => {
   const isEnabledHints = useAppSelector(selectIsEnabledHints)
   const groupRef = React.useRef<HTMLElement>(null)

   return (
      <CSSTransition<HTMLElement>
         classNames={'Group'}
         nodeRef={groupRef}
         in={isEnabledHints}
         timeout={200}
         unmountOnExit
      >
         <GroupCard className='Group' getRootRef={groupRef} header={<Header mode='secondary'>Параметры</Header>}>
            <CellSettingsHintsStyle />
            <Separator wide />
            <CellSettingsHintsTimeout />
         </GroupCard>
      </CSSTransition>
   )
}
