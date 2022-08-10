import React from 'react'
import ReactDOM from 'react-dom'
import eruda from 'eruda'

import { App } from 'components/layout/App'

// import '@vkontakte/vkui/dist/components.css'

import '@vkontakte/vkui/dist/vkui.css'
import '@vkontakte/vkui/dist/unstable.css'

import '@vkontakte/vkui/dist/fonts.css'

import 'styles/index.css'

<<<<<<< HEAD
eruda.init()

if (process.env.NODE_ENV !== 'production') {
   eruda.remove('console')
}
=======
const element = document.getElementById('root')

if (!element) throw new Error()

eruda.init()
if (process.env.NODE_ENV !== 'production') {
   eruda.remove('console')
}
// const root = ReactDOM.createRoot(element)
>>>>>>> 9883f9bb75e478a8b88a625d50a2fee7fbf368e4

ReactDOM.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
<<<<<<< HEAD
   document.getElementById('root')
=======
   element
>>>>>>> 9883f9bb75e478a8b88a625d50a2fee7fbf368e4
)
