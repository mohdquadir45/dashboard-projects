import React from 'react'
import ReactDOM from 'react-dom/client'
import { LayoutProvider } from './components/context/useLayoutContext.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LayoutProvider>
    <App/>
   </LayoutProvider>
  </React.StrictMode>,
)
