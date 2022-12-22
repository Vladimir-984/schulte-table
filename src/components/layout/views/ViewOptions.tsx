import React from 'react'
import { useLocation } from '@happysanta/router'
import { View } from '@vkontakte/vkui'
import { PANELS } from 'router/panels'
import { NavProp } from 'types/nav'
import { PanelOptions } from '../panels/options/options/PanelOptions'
import { PanelSettings } from '../panels/options/settings/PanelSettings'
import { PanelSettingsNotifications } from '../panels/options/settingsNotifications/PanelSettingsNotifications'
import { PanelSettingsAppearance } from '../panels/options/settingsAppearacne/PanelSettingsAppearance'

import { PanelAbout } from '../panels/options/about/PanelAbout'
import { PanelHelp } from '../panels/options/help/PanelHelp'

export const ViewOptions: React.FC<NavProp> = ({ nav }) => {
   const location = useLocation()
   const activePanel = location.getViewActivePanel(nav) || PANELS.OPTIONS
   return (
      <View activePanel={activePanel}>
         <PanelOptions nav={PANELS.OPTIONS} />

         <PanelSettings nav={PANELS.SETTINGS} />
         <PanelSettingsNotifications nav={PANELS.SETTINGS_NOTIFICATIONS} />
         <PanelSettingsAppearance nav={PANELS.SETTINGS_APPEARANCE} />

         <PanelAbout nav={PANELS.ABOUT} />
         <PanelHelp nav={PANELS.HELP} />
      </View>
   )
}
