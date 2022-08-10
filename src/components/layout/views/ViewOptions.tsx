import React from 'react'
import { useLocation } from '@happysanta/router'
import { View } from '@vkontakte/vkui'
import { PANELS } from 'router/panels'
import { NavProp } from 'types/nav'
import { PanelOptions } from '../panels/PanelOptions'
import { PanelSettings } from '../panels/PanelSettings'
import { PanelSettingsNotifications } from '../panels/PanelSettingsNotifications'
import { PanelSettingsAppearance } from '../panels/PanelSettingsAppearance'
import { PanelSettingsHints } from '../panels/PanelSettingsHints'
import { PanelSettingsHintsTimeout } from '../panels/PanelSettingsHintsTimeout'
import { PanelSettingsHintsStyle } from '../panels/PanelSettingsHintsStyle'
import { PanelSettingsCells } from '../panels/PanelSettingsCells'
import { PanelAbout } from '../panels/PanelAbout'
import { PanelHelp } from '../panels/PanelHelp'

export const ViewOptions: React.FC<NavProp> = ({ nav }) => {
   const location = useLocation()
   const activePanel = location.getViewActivePanel(nav) || PANELS.OPTIONS
   return (
      <View activePanel={activePanel}>
         <PanelOptions nav={PANELS.OPTIONS} />
         <PanelAbout nav={PANELS.ABOUT} />
         <PanelHelp nav={PANELS.HELP} />

         <PanelSettings nav={PANELS.SETTINGS} />
         <PanelSettingsHints nav={PANELS.SETTINGS_HINTS} />
         <PanelSettingsHintsTimeout nav={PANELS.SETTINGS_HINTS_TIMEOUT} />
         <PanelSettingsHintsStyle nav={PANELS.SETTINGS_HINTS_STYLE} />
         <PanelSettingsNotifications nav={PANELS.SETTINGS_NOTIFICATIONS} />
         <PanelSettingsAppearance nav={PANELS.SETTINGS_APPEARANCE} />

         <PanelSettingsCells nav={PANELS.SETTINGS_CELLS} />
      </View>
   )
}
