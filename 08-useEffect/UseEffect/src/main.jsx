import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Home from './ex3/Home'
import Pokemon from './ex4/Pokemon'
// import App from './App.jsx'
// import Counter from './ex1/Counter.jsx'
// import Interval from './ex2/Interval.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pokemon/>
  </StrictMode>,
)
