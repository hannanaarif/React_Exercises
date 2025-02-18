import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Input from './Input'
// import Grades from './Grade'
import ContactForm from './ContactForm'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactForm />
  </StrictMode>,
)
