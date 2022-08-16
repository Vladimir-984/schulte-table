import React from 'react'
import { classNames, Group, GroupProps } from '@vkontakte/vkui'

import './GroupPanel.css'

export const GroupPanel: React.FC<GroupProps> = ({ separator = 'hide', className, children, ...restProps }) => {
   return (
      <Group separator={separator} className={classNames('GroupPanel', className)} {...restProps}>
         {children}
      </Group>
   )
}
