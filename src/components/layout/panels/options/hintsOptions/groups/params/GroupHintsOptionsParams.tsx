import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { Header, Separator } from '@vkontakte/vkui'
import { useAppSelector } from 'hooks/redux'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'

import { CellHintsOptionsStyle } from './cells/CellHintsOptionsStyle'
import { CellHintsOptionsTimeout } from './cells/CellHintsOptionsTimeout'

import { selectChangeableTableHintsIsEnabled } from 'store/selectors/tableOptions'

export const GroupHintsOptionsParams: React.FC = () => {
   const hintsIsEnabled = useAppSelector(selectChangeableTableHintsIsEnabled)
   const groupRef = React.useRef<HTMLElement>(null)

   return (
      <CSSTransition<HTMLElement>
         classNames={'Group'}
         nodeRef={groupRef}
         in={hintsIsEnabled}
         timeout={200}
         unmountOnExit
      >
         <GroupCard className='Group' getRootRef={groupRef} header={<Header mode='secondary'>Параметры</Header>}>
            <CellHintsOptionsStyle />
            <Separator wide />
            <CellHintsOptionsTimeout />
         </GroupCard>
      </CSSTransition>
   )
}
