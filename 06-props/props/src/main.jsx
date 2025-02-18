import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Section from './ex1/Section'
// import Section from './ex2/Section.jsx'
// import Profile from './ex3/Profile.jsx'
// import Paragraph from './ex4/Paragraph.jsx'
// import GrandParents from './ex5/GrandParent.jsx'
import GrandParent from './ex6/GrandParentButton.jsx'

// function handleCLick(){
//   console.log("button clicked")
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GrandParent />
  </StrictMode>,
)
