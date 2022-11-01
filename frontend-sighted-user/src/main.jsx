import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import QandAContextProvider from './contexts/QandAContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QandAContextProvider>
      <App />
    </QandAContextProvider>
  </React.StrictMode>
)