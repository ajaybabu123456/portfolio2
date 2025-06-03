import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Check for dark mode preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

document.documentElement.classList.toggle('dark', prefersDark)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
