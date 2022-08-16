import { Page, RouteList } from '@happysanta/router'
import {
   PAGE_ABOUT,
   PAGE_HELP,
   PAGE_MAIN,
   PAGE_OPTIONS,
   PAGE_PROFILE,
   PAGE_SETTINGS,
   PAGE_SETTINGS_APPEARANCE,
   PAGE_SETTINGS_CELLS,
   PAGE_SETTINGS_CELLS_COLOR_CELL,
   PAGE_SETTINGS_CELLS_COLOR_SYMBOL,
   PAGE_SETTINGS_HINTS,
   PAGE_SETTINGS_HINTS_STYLE,
   PAGE_SETTINGS_HINTS_TIMEOUT,
   PAGE_SETTINGS_NOTIFICATIONS,
   PAGE_SETTINGS_TABLE_DISPLAY,
   PAGE_TABLE,
} from './pages'

import { PANELS } from './panels'
import { ROOTS } from './roots'
import { VIEWS } from './views'

export const routes: RouteList = {
   [PAGE_MAIN]: new Page(PANELS.MAIN, VIEWS.MAIN, ROOTS.MAIN),

   [PAGE_HELP]: new Page(PANELS.HELP, VIEWS.OPTIONS, ROOTS.MAIN),
   [PAGE_ABOUT]: new Page(PANELS.ABOUT, VIEWS.OPTIONS, ROOTS.MAIN),
   [PAGE_OPTIONS]: new Page(PANELS.OPTIONS, VIEWS.OPTIONS, ROOTS.MAIN),
   [PAGE_SETTINGS]: new Page(PANELS.SETTINGS, VIEWS.OPTIONS, ROOTS.MAIN),
   [PAGE_SETTINGS_TABLE_DISPLAY]: new Page(PANELS.SETTINGS_TABLE_DISPLAY, VIEWS.OPTIONS, ROOTS.MAIN),

   [PAGE_SETTINGS_HINTS]: new Page(PANELS.SETTINGS_HINTS, VIEWS.OPTIONS, ROOTS.MAIN),
   [PAGE_SETTINGS_HINTS_TIMEOUT]: new Page(PANELS.SETTINGS_HINTS_TIMEOUT, VIEWS.OPTIONS, ROOTS.MAIN),
   [PAGE_SETTINGS_HINTS_STYLE]: new Page(PANELS.SETTINGS_HINTS_STYLE, VIEWS.OPTIONS, ROOTS.MAIN),

   [PAGE_SETTINGS_NOTIFICATIONS]: new Page(PANELS.SETTINGS_NOTIFICATIONS, VIEWS.OPTIONS, ROOTS.MAIN),
   [PAGE_SETTINGS_APPEARANCE]: new Page(PANELS.SETTINGS_APPEARANCE, VIEWS.OPTIONS, ROOTS.MAIN),

   [PAGE_SETTINGS_CELLS]: new Page(PANELS.SETTINGS_CELLS, VIEWS.OPTIONS, ROOTS.MAIN),
   [PAGE_SETTINGS_CELLS_COLOR_CELL]: new Page(PANELS.SETTINGS_CELLS_COLOR_CELL, VIEWS.OPTIONS, ROOTS.MAIN),
   [PAGE_SETTINGS_CELLS_COLOR_SYMBOL]: new Page(PANELS.SETTINGS_CELLS_COLOR_SYMBOL, VIEWS.OPTIONS, ROOTS.MAIN),

   [PAGE_TABLE]: new Page(PANELS.TABLE, VIEWS.MAIN, ROOTS.MAIN),

   [PAGE_PROFILE]: new Page(PANELS.PROFILE, VIEWS.PROFILE, ROOTS.PROFILE),
}
