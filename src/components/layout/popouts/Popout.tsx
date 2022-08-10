import React from 'react'
import { useLocation } from '@happysanta/router'
import { PopoutRoot } from './PopoutRoot'

export const Popout: React.FC = () => {
   const activePopout = useLocation().getPopupId()

   return <PopoutRoot activePopout={activePopout}></PopoutRoot>
}
