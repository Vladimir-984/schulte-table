import React from 'react'
import { classNames } from '@vkontakte/vkui'
import './VisibilityHidden.css'

interface VisibilityHiddenProps extends React.AllHTMLAttributes<HTMLDivElement> {}
export const VisibilityHidden: React.FC<VisibilityHiddenProps> = ({ className, children, ...restProps }) => {
   return (
      <div className={classNames('VisibilityHidden', className)} {...restProps}>
         {children}
      </div>
   )
}
