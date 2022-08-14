import React from 'react'
import { useLocation } from '@happysanta/router'
import { View } from '@vkontakte/vkui'
import { PANELS } from 'router/panels'
import { NavProp } from 'types/nav'
import { PanelProfile } from '../panels/profile/PanelProfile'

export const ViewProfile: React.FC<NavProp> = ({ nav }) => {
   const location = useLocation()
   const activePanel = location.getViewActivePanel(nav) || PANELS.PROFILE
   return (
      <View activePanel={activePanel}>
         <PanelProfile nav={PANELS.PROFILE} />
      </View>
   )
}
