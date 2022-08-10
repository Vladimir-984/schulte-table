import React from 'react'
import { NavIdProps } from '@vkontakte/vkui'

interface PopoutRootProps {
<<<<<<< HEAD
   activePopout: string | null
=======
   activePopout: string
>>>>>>> 9883f9bb75e478a8b88a625d50a2fee7fbf368e4
}

export const PopoutRoot: React.FC<PopoutRootProps> = ({ children, activePopout }) => {
   const popouts = React.Children.toArray(children) as React.ReactElement<NavIdProps>[]

   const popout = popouts.find((el) => el.props.nav === activePopout)

   return popout ?? null
}
