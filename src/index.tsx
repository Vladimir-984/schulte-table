import React from 'react'
import ReactDOM from 'react-dom'
import { App } from 'components/layout/App'

// import '@vkontakte/vkui/dist/components.css'

import '@vkontakte/vkui/dist/vkui.css'
import '@vkontakte/vkui/dist/unstable.css'

import '@vkontakte/vkui/dist/fonts.css'

import 'styles/index.css'

ReactDOM.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
   document.getElementById('root')
)
