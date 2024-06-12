import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { store } from './app/index.ts'
import App from './components/App/App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
