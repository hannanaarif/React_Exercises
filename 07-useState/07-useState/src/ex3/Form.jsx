/*
    1. Create a new Vite React Project

    2. Create a Form.jsx file to create a Form
       Component that you export within it

    3. Inside Form, create an 3 <input> text fields, one
       for first name, last name, and email. Create a 'submit'
       <button> below the inputs. Wrap the inputs and button inside
       a <form> element. Then, add an <h1> element below the
       <form> element (empty text to start)

    4. Make it so that when you type in to the 3 <input> elements
       and then click 'submit', the data for the 3 inputs gets
       displayed inside the <h1> element as text. You can format
       this text however you want, but make sure the page does not
       reload when you click 'submit'

    5. Import the Form component in to main.jsx and replace the
       <App /> with it and test that it works in the Browser

    BONUS* Can you think of a few ways you could do this?
*/

import { useState } from "react";

function Form() {
  const [Inputval,setInputval]=useState({
    firstName:"",
    lastName:"",
    email:""
    })
  const [submit, setSubmit] = useState("");


  function handleChange(e){
    setInputval({...Inputval,[e.target.name]:e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    setSubmit(Inputval)
  }

  console.log("Rendering");

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="first name" onChange={handleChange} />
        <input type="text" name="lastName" placeholder="last name" onChange={handleChange} />
        <input type="text" name="email" placeholder="email" onChange={handleChange}/>
        <button type="submit">submit</button>
      </form>
      <h4>{JSON.stringify(submit)}</h4>
    </>
  );
}

export default Form;
