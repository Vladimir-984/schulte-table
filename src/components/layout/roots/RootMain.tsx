import React from 'react'
import { NavIdProps, Root } from '@vkontakte/vkui'
import { ViewMain } from '../views/ViewMain'
import { useLocation } from '@happysanta/router'
import { VIEWS } from 'router/views'
import { ViewOptions } from '../views/ViewOptions'

export const RootMain: React.FC<NavIdProps> = ({ nav }) => {
   const location = useLocation()
   const activeView = location.getViewId()
   return (
      <Root activeView={activeView}>
         <ViewMain nav={VIEWS.MAIN} />
         <ViewOptions nav={VIEWS.OPTIONS} />
      </Root>
   )
}
