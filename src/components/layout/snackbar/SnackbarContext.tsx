import React from 'react'

export interface ISnackbarContext {
   snackbar: React.ReactNode
   setActiveSnackbar: React.Dispatch<React.SetStateAction<React.ReactNode>>
}

export const SnackbarContext = React.createContext<ISnackbarContext>(null!)

export const useSnackbarContext = () => {
   const context = React.useContext(SnackbarContext)
   if (!context) throw new Error('Использование useSnackbarContext без SnackbarProvider')
   return context
}

export const useSnackbar = () => {
   return useSnackbarContext().snackbar
}

export const SnackbarProvider: React.FC = ({ children }) => {
   const [activeSnackbar, setActiveSnackbar] = React.useState<React.ReactNode>(null)

   const value = React.useMemo<ISnackbarContext>(() => {
      return { snackbar: activeSnackbar, setActiveSnackbar }
   }, [activeSnackbar])

   return <SnackbarContext.Provider value={value}>{children}</SnackbarContext.Provider>
}
