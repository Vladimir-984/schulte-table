import React from 'react'
import { RouterContext } from '@happysanta/router'
import { Provider } from 'react-redux'
import { store } from 'store'
import { router } from 'router'
import { Layout } from './Layout'
import { VKUIProvider } from './VKUIProvider'
import { SnackbarProvider } from './snackbar/SnackbarContext'
import { PopoutProvider } from './popouts/PopoutContext'

export const App: React.FC = () => {
   return (
      <RouterContext.Provider value={router}>
         <Provider store={store}>
            <VKUIProvider>
               <SnackbarProvider>
                  <PopoutProvider>
                     <Layout />
                  </PopoutProvider>
               </SnackbarProvider>
            </VKUIProvider>
         </Provider>
      </RouterContext.Provider>
   )
}
