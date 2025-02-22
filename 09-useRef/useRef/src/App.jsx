
import { useEffect, useRef } from 'react'
import './App.css'

function App() {

  const ref=useRef('');
  const domref=useRef('')

  console.log(ref)

  function handleClick(){
    ref.current++;
    console.log(ref);
  }

  useEffect(()=>{
   domref.current.textContent='Boo';
   console.log("ref pointing to",domref.current)
  })

  return (
    <>
    <h1 ref={domref}>App</h1>
    <h1 ref={ref}>Hello</h1>
    <button onClick={handleClick}>Click Me</button>
    </>
  )


}

export default App
