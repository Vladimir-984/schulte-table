import React from 'react'
import { Card, CardGrid, CardProps, Group, GroupProps } from '@vkontakte/vkui'
import { HasRootRef } from '@vkontakte/vkui/dist/types'

interface GroupCardProps extends GroupProps, HasRootRef<HTMLElement> {
   cardMode?: CardProps['mode']
}

export const GroupCard: React.FC<GroupCardProps> = ({
   children,
   cardMode = 'tint',
   separator = 'hide',
   mode = 'plain',
   ...groupProps
}) => {
   return (
      <Group mode={mode} separator={separator} {...groupProps}>
         <CardGrid size='l'>
            <Card mode={cardMode}>{children}</Card>
         </CardGrid>
      </Group>
   )
}
