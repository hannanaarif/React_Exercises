/*
    1. Create a new Vite React Project

    2. Create a Counter.jsx file with a Counter
       component and export it as well as a
       Button.jsx with a Button component and
       export that as well

    3. Make Counter return an <h1> as well as 3
       <Button> elements

    4. Make Button return a <button> element (the
       info for the button will come from props later)

    5. Create a reducer function and use useReducer
       to hook up the 3 buttons to make the counter
       go up, go down, and reset to 0. The current
       count should show in the <h1>

    6. You will need to figure out what props to pass
       into each Button from Counter

    7. Replace the <App /> in main.jsx with your Counter
       component and test that it works in your Browser

    BONUS* Try out various useEffects inside Counter and
           Button to see if you can guess when each will
           re-render (mount, update, and state updates)
*/

import { useEffect, useReducer } from "react";
import Button from "./Button";

function reducer(previousvalue, action) {

  switch (action.type) {
    case "up": {
      return previousvalue + action.value;
    }
    case "down": {
      return previousvalue - action.value;
    }
    case "Reset": {
        return 0;
    }
    default: {
        return previousvalue;
      }
  }
}

console.log("render");

function Counter() {
  const [counter, CounterDispatch] = useReducer(reducer, 0);

//   function goUp() {
//     dispatch({ type: "up", value: 1 });
//   }
//   function godown() {
//     dispatch({ type: "down", value: 1 });
//   }
//   function Reset() {
//     dispatch({ type: "Reset" });
//   }
  useEffect(()=>{
    console.log("hi there");
  })

  return (
    <>
      <h1>counter: {counter}</h1>
      <Button text="Go_UP" CounterDispatch={CounterDispatch} action={{type:"up",value:1}}/>
      <Button text="Go_down" CounterDispatch={CounterDispatch} action={{type:"down",value:1}}/>
      <Button text="Reset" CounterDispatch={CounterDispatch} action={{type:"Reset"}}/>

      {/* <button onClick={goUp}></button>
      <button onClick={godown}></button>
      <button onClick={Reset}></button> */}
    </>
  );
}

export default Counter;
