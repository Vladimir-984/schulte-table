import { startGlobalRouter } from '@happysanta/router'
import type { Eruda } from 'eruda'
import { routes } from './routes'

export const router = startGlobalRouter(routes)

let eruda: Eruda | null = null

router.addListener('update', (newRoute, oldRoute, isNew, type) => {
   if (Boolean(newRoute.params['debug']) === true) {
      if (eruda === null) {
         import('eruda').then((module) => {
            eruda = module.default
            eruda.init()
         })
      } else {
         eruda.init()
      }
   } else if (
      Boolean(newRoute.params['debug']) === false &&
      Boolean(oldRoute?.params['debug']) === true &&
      eruda !== null
   ) {
      eruda.destroy()
   }
})
