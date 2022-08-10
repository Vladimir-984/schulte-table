import React from 'react'
import ReactDOM from 'react-dom'
import eruda from 'eruda'

import { App } from 'components/layout/App'

// import '@vkontakte/vkui/dist/components.css'

import '@vkontakte/vkui/dist/vkui.css'
import '@vkontakte/vkui/dist/unstable.css'

import '@vkontakte/vkui/dist/fonts.css'

import 'styles/index.css'

eruda.init()

if (process.env.NODE_ENV !== 'production') {
   eruda.remove('console')
}

ReactDOM.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
   document.getElementById('root')
)
