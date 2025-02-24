/*
    1. Create a new Vite React Project

    2. Create a ControlledForm.jsx file with a
       ControlledForm component and export it

    3. Make ControlledForm return:
       - text <input> for a 'name'
       - text <input> for an 'email'
       - number <input> for an 'age'
       - submit button
       Wrap all of the above in a <form> element and
       give them each a relevant 'name' attribute

    4. Create a reducer function and as well as an initial
       state variable that is an object like so:
       const initialState = { name: '', email: '', age: '' }

    5. How would you use useReducer and everything above to
       hook up the form's input values to change as you type
       in them and the values of all 3 inputs to be logged
       out to the console when you click submit?

    6. Replace the <App /> in main.jsx with your ControlledForm
       component and test that it works in your Browser

    BONUS* How would you clear the form on submit?
*/

import { useReducer } from "react";

function reducer(state, action) {
  // console.log("state name", state);
  // console.log("state email", state.email);
  // console.log("state age", state.age);
  
  switch (action.type) {
    case "name":
      return { ...state, name: action.value };
    case "email":
      return { ...state, email: action.value };
    case "age":
      return { ...state, age: action.value };
    default:
      throw new Error("Enter Valid Input");
  }
}

function ControlledForm() {
  const initialState = { name: "", email: "", age: "" };

  const [counter, counterDispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("handled called");
    counterDispatch({ type: "name", value: e.target.name.value });
    counterDispatch({ type: "email", value: e.target.email.value });
    counterDispatch({ type: "age", value: e.target.age.value });
  };

  return (
    <>
      <h2>{JSON.stringify(counter)}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="text" name="email" />
        <input type="number" name="age" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default ControlledForm;
