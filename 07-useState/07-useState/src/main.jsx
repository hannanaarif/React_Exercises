import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Form from './ex3/Form'
// import Profile from './ex4/Profile'
import Counter2 from './ex5/Counter2'
// import Textbox from './ex2/TextBox'
// import Counter from './ex1/Counter'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter2 />
  </StrictMode>,
)
