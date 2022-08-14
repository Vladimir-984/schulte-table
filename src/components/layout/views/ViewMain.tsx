import React from 'react'
import { useLocation } from '@happysanta/router'
import { View } from '@vkontakte/vkui'
import { PanelMain } from '../panels/main/PanelMain'
import { NavProp } from 'types/nav'
import { PANELS } from 'router/panels'
import { PanelTable } from '../panels/main/PanelTable'

export const ViewMain: React.FC<NavProp> = ({ nav }) => {
   const location = useLocation()
   const activePanel = location.getViewActivePanel(nav) || PANELS.MAIN

   return (
      <View activePanel={activePanel}>
         <PanelMain nav={PANELS.MAIN} />
         <PanelTable nav={PANELS.TABLE} />
      </View>
   )
}
