import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// src/main.jsx or src/main.tsx
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
