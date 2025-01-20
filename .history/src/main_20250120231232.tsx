import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/auth-context.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <App />
      </AuthProvider>
    <Toaster
          position="top-right"/>
  </StrictMode>,
)
