import React from 'react'
import { Title, TitleProps } from '@vkontakte/vkui'

export const IndicatorTitle: React.FC<TitleProps> = ({
   level = '3',
   weight = '3',
   className,
   children,
   ...restProps
}) => {
   return (
      <Title level={level} weight={weight} className='IndicatorTitle' {...restProps}>
         {children}
      </Title>
   )
}
