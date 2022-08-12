import React from 'react'
import { Avatar, AvatarProps, classNames } from '@vkontakte/vkui'

import './AvatarIcon.css'

type TypeAvatarIconColor = 'red' | 'green' | 'blue' | 'violet' | 'orange' | 'purple'

interface AvatarIconProps extends Pick<AvatarProps, 'size' | 'shadow' | 'mode'> {
   color: TypeAvatarIconColor
}

/**
 * `children` - Иконка 22 fill=white
 */
export const AvatarIcon: React.FC<AvatarIconProps> = ({ shadow = true, size = 28, mode = 'app', color, children }) => {
   return (
      <Avatar size={size} shadow={shadow} mode={mode} className={classNames('AvatarIcon', `AvatarIcon--clr-${color}`)}>
         {children}
      </Avatar>
   )
}
