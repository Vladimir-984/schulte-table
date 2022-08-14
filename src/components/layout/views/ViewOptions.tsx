import React from 'react'
import { useLocation } from '@happysanta/router'
import { View } from '@vkontakte/vkui'
import { PANELS } from 'router/panels'
import { NavProp } from 'types/nav'
import { PanelOptions } from '../panels/options/options/PanelOptions'
import { PanelSettings } from '../panels/options/settings/PanelSettings'
import { PanelSettingsNotifications } from '../panels/options/settingsNotifications/PanelSettingsNotifications'
import { PanelSettingsAppearance } from '../panels/options/settingsAppearacne/PanelSettingsAppearance'
import { PanelSettingsHints } from '../panels/options/settingsHints/PanelSettingsHints'
import { PanelSettingsHintsTimeout } from '../panels/options/settingsHintsTimeout/PanelSettingsHintsTimeout'
import { PanelSettingsHintsStyle } from '../panels/options/settingsHintsStyle/PanelSettingsHintsStyle'
import { PanelSettingsCells } from '../panels/options/settingsCells/PanelSettingsCells'
import { PanelAbout } from '../panels/options/about/PanelAbout'
import { PanelHelp } from '../panels/options/help/PanelHelp'
import { PanelSettingsTableView } from '../panels/options/settingsTable/PanelSettingsTableView'
import { PanelSettingsCellsColorCell } from '../panels/options/settingsCellsColorCell/PanelSettingsCellsColorCell'
import { PanelSettingsCellsColorSymbol } from '../panels/options/settingsCellsColorSymbol/PanelSettingsCellsColorSymbol'

export const ViewOptions: React.FC<NavProp> = ({ nav }) => {
   const location = useLocation()
   const activePanel = location.getViewActivePanel(nav) || PANELS.OPTIONS
   return (
      <View activePanel={activePanel}>
         <PanelOptions nav={PANELS.OPTIONS} />

         <PanelSettings nav={PANELS.SETTINGS} />
         <PanelSettingsNotifications nav={PANELS.SETTINGS_NOTIFICATIONS} />
         <PanelSettingsAppearance nav={PANELS.SETTINGS_APPEARANCE} />

         <PanelSettingsTableView nav={PANELS.SETTINGS_TABLE_VIEW} />
         <PanelSettingsHints nav={PANELS.SETTINGS_HINTS} />
         <PanelSettingsHintsTimeout nav={PANELS.SETTINGS_HINTS_TIMEOUT} />
         <PanelSettingsHintsStyle nav={PANELS.SETTINGS_HINTS_STYLE} />

         <PanelSettingsCells nav={PANELS.SETTINGS_CELLS} />
         <PanelSettingsCellsColorCell nav={PANELS.SETTINGS_CELLS_COLOR_CELL} />
         <PanelSettingsCellsColorSymbol nav={PANELS.SETTINGS_CELLS_COLOR_SYMBOL} />

         <PanelAbout nav={PANELS.ABOUT} />
         <PanelHelp nav={PANELS.HELP} />
      </View>
   )
}
