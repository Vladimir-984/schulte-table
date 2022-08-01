import React from 'react'
import { NavIdProps } from '@vkontakte/vkui'

interface PopoutRootProps {
   activePopout: string
}

export const PopoutRoot: React.FC<PopoutRootProps> = ({ children, activePopout }) => {
   const popouts = React.Children.toArray(children) as React.ReactElement<NavIdProps>[]

   const popout = popouts.find((el) => el.props.nav === activePopout)

   return popout ?? null
}
