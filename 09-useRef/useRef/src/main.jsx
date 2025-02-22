import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Input from './ex1/Input.jsx'
// import GuessNumber from './ex3/GuessNumber.jsx'
import Form from './ex4/Form.jsx'
// import Video from './ex2/Video.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form/>
  </StrictMode>,
)
