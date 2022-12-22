import React from 'react'

type TypeAnchorElement = HTMLElement | null

type TypeSetAnchorElement = (element: HTMLElement | null) => void

/* interface IPopoutContext {
   anchorElement: React.RefObject<TypeAnchorElement>
   setAnchorElement: TypeSetAnchorElement
} */

export const PopoutAnchorElementContext = React.createContext<React.RefObject<TypeAnchorElement>>({ current: null })

export const PopoutSetAnchorElementContext = React.createContext<TypeSetAnchorElement>(() => {})

const PopoutElementProvider: React.FC = ({ children }) => {
   const elementRef = React.useRef<TypeAnchorElement>(null)

   const setAnchorElement: TypeSetAnchorElement = (el) => {
      elementRef.current = el
   }

   return (
      <PopoutAnchorElementContext.Provider value={elementRef}>
         <PopoutSetAnchorElementContext.Provider value={setAnchorElement}>
            {children}
         </PopoutSetAnchorElementContext.Provider>
      </PopoutAnchorElementContext.Provider>
   )
}

export const PopoutProvider: React.FC = ({ children }) => {
   return <PopoutElementProvider>{children}</PopoutElementProvider>
}

export const useAnchorElement = () => {
   return React.useContext(PopoutAnchorElementContext).current
}
export const useSetAnchorElement = () => {
   return React.useContext(PopoutSetAnchorElementContext)
}
