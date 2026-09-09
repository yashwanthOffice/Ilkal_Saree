import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App.jsx'
import { CatalogProvider } from './context/CatalogContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <CatalogProvider>
        <App />
      </CatalogProvider>
    </HashRouter>
  </React.StrictMode>
)
