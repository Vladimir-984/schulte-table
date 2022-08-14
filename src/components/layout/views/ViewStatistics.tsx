import React from 'react'
import { useLocation } from '@happysanta/router'
import { View } from '@vkontakte/vkui'
import { PANELS } from 'router/panels'
import { NavProp } from 'types/nav'
import { PanelStatistics } from '../panels/profile/PanelStatistics'

export const ViewStatistics: React.FC<NavProp> = ({ nav }) => {
   const location = useLocation()
   const activePanel = location.getViewActivePanel(nav) || PANELS.STATISTICS
   return (
      <View activePanel={activePanel}>
         <PanelStatistics nav={PANELS.STATISTICS} />
      </View>
   )
}
