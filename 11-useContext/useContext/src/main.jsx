import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Parent from './ex4/Parent.jsx'
// import Level3 from './ex0/Level3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Parent />
  </StrictMode>,
)
