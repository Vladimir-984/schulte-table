import React from 'react'

export const getNegativeOffsetDistance = (elementRef: React.RefObject<HTMLElement>): number | undefined => {
   return elementRef.current?.clientHeight !== undefined ? -elementRef.current.clientHeight : undefined
}
