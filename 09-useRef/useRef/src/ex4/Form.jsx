/*
    1. Create a new Vite React project

    2. Create an Form.jsx with an Form component
       that is exported

    3. Inside Form, return a <form> with the following:
       - text input for a name
       - email input for an email
       - number input for an age
       - button with type submit and text 'Submit'
       Then, add an empty <p> tag below the <form>

    4. Find a way to use useRef such that when you submit
       the form, we display the form content in the <p>
       tag below the form in any format you like so we can
       see the information entered (and clear the form)

    5. Replace the <App /> in main.jsx with your Form
       component and test that it works in your Browser

    HINT* Check how the FormData Web API on MDN
*/

import { useRef, useState } from "react";

function Form(){
    const nameRef=useRef(null);
    const emailRef=useRef(null)
    const numberRef=useRef(null)
    const [inputs,setInputs]=useState('');

    // const[form, setForm] = useState({
    //     name:"",
    //     email:"",
    //     age:""
    // })

    function handleSubmit(e){
        e.preventDefault();
        // console.log(form)
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const age = numberRef.current.value;
        console.log(`Name: ${name}, Email: ${email}, Age: ${age}`)
        // Set the combined string to state so it appears in the <p> tag
        setInputs(`Name: ${name}, Email: ${email}, Age: ${age}`);
    }

    // const handleFormChnage = (e)=>{
    //     const {name, value} = e.target
    //     console.log(name, value)
    //     setForm((prev)=> {
    //        return { ...prev,
    //         [name]:value
    //     }
    //     });
    // }

    return (
        <>
       <form onSubmit={handleSubmit}>
        <input  type="text" placeholder="Name" ref={nameRef} name="name" />
        <input  type="email" placeholder="Email" ref={emailRef} name="email" />
        <input  type="number" placeholder="Age" ref={numberRef} name="age" />
        <button type="submit">Submit</button>
      </form>
        <p>{inputs}</p>
        </>
    )
}

export default Form;