import React from 'react'
import { useLocation } from '@happysanta/router'
import { Root } from '@vkontakte/vkui'
import { NavProp } from 'types/nav'
import { ViewStatistics } from '../views/ViewStatistics'
import { VIEWS } from 'router/views'

export const RootStatistics: React.FC<NavProp> = ({ nav }) => {
   const location = useLocation()
   const activeView = location.getViewId()
   return (
      <Root activeView={activeView}>
         <ViewStatistics nav={VIEWS.STATISTICS} />
      </Root>
   )
}
