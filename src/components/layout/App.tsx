import React from 'react'
import { RouterContext } from '@happysanta/router'
import { Provider } from 'react-redux'
import { store } from 'store'
import { router } from 'router'
import { Layout } from './Layout'
import { VKUIProvider } from './VKUIProvider'

export const App: React.FC = () => {
   return (
      <RouterContext.Provider value={router}>
         <Provider store={store}>
            <VKUIProvider>
               <Layout />
            </VKUIProvider>
         </Provider>
      </RouterContext.Provider>
   )
}
