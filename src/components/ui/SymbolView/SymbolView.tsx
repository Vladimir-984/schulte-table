import React from 'react'
import { classNames } from '@vkontakte/vkui'
import { ISymbol } from 'types/table'

import './SymbolView.css'

interface SymbolViewProps extends ISymbol {}

export const SymbolView: React.FC<SymbolViewProps> = ({
   value,
   disabled,
   id,
   isFlipHorizontally,
   isFlipVertically,
}) => {
   return <div className={classNames('Symbol', disabled && 'Symbol--disabled')}>{value}</div>
}
