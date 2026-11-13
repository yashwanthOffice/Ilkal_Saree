import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { CatalogProvider } from './context/CatalogContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Ilkal_Saree">
      <AuthProvider>
        <CatalogProvider>
          <App />
        </CatalogProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
