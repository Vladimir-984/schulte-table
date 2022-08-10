// const PANEL_ = ''
const PANEL_MAIN = 'panel_main'
const PANEL_OPTIONS = 'panel_options'
const PANEL_SETTINGS = 'panel_settings'
const PANEL_SETTINGS_HINTS = 'panel_settings_hints'
const PANEL_SETTINGS_HINTS_TIMEOUT = 'panel_settings_hints_timeout'
const PANEL_SETTINGS_HINTS_STYLE = 'panel_settings_hints_style'

const PANEL_SETTINGS_NOTIFICATIONS = 'panel_settings_notifications'
const PANEL_SETTINGS_APPEARANCE = 'panel_settings_appearance'

const PANEL_SETTINGS_CELLS = 'panel_settings_cells'

const PANEL_TABLE = 'panel_table'

const PANEL_ABOUT = 'panel_about'
const PANEL_HELP = 'panel_help'

const PANEL_PROFILE = 'panel_profile'

// const PANEL_STATISTICS = 'panel_statistics'

export const PANELS = {
   MAIN: PANEL_MAIN,
   HELP: PANEL_HELP,
   ABOUT: PANEL_ABOUT,

   OPTIONS: PANEL_OPTIONS,
   SETTINGS: PANEL_SETTINGS,
   SETTINGS_HINTS: PANEL_SETTINGS_HINTS,
   SETTINGS_HINTS_TIMEOUT: PANEL_SETTINGS_HINTS_TIMEOUT,
   SETTINGS_HINTS_STYLE: PANEL_SETTINGS_HINTS_STYLE,

   SETTINGS_NOTIFICATIONS: PANEL_SETTINGS_NOTIFICATIONS,
   SETTINGS_APPEARANCE: PANEL_SETTINGS_APPEARANCE,

   SETTINGS_CELLS: PANEL_SETTINGS_CELLS,

   TABLE: PANEL_TABLE,
   PROFILE: PANEL_PROFILE,
   // STATISTICS: PANEL_STATISTICS,
}

export const PANELS_TABBAR = {
   [PANELS.MAIN]: true,
   [PANELS.PROFILE]: true,
}

export const PANELS_TABBAR_SHADOW = {}
