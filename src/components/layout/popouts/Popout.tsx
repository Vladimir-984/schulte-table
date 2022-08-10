import React from 'react'
<<<<<<< HEAD
import { useLocation } from '@happysanta/router'
import { PopoutRoot } from './PopoutRoot'

export const Popout: React.FC = () => {
   const activePopout = useLocation().getPopupId()

=======
import { PopoutRoot } from './PopoutRoot'

export const Popout: React.FC = () => {
   const activePopout = ''
>>>>>>> 9883f9bb75e478a8b88a625d50a2fee7fbf368e4
   return <PopoutRoot activePopout={activePopout}></PopoutRoot>
}
