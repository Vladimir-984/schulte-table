import React from 'react'
import { useLocation } from '@happysanta/router'
import { Root } from '@vkontakte/vkui'
import { NavProp } from 'types/nav'
import { ViewProfile } from '../views/ViewProfile'
import { VIEWS } from 'router/views'

export const RootProfile: React.FC<NavProp> = ({ nav }) => {
   const location = useLocation()
   const activeView = location.getViewId()
   return (
      <Root activeView={activeView}>
         <ViewProfile nav={VIEWS.PROFILE} />
      </Root>
   )
}
