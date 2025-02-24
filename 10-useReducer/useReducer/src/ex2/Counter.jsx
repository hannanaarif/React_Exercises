/*
    1. Create a new Vite React Project

    2. Create a Counter.jsx file with a Counter
       component and export it

    3. Make Counter return an <h1> as well as 3
       <button> elements

    4. Create a reducer function and use useReducer
       to hook up the 3 buttons to make the counter
       go up, go down, and reset to 0. The current
       count should show in the <h1>

    5. Replace the <App /> in main.jsx with your Counter
       component and test that it works in your Browser
*/

import { useReducer } from "react";


function reducer(previousvalue,action){
    console.log(action);
    if(action.type==='up'){
        return previousvalue+action.value;
    }
    else if(action.type==='down'){
        return previousvalue-action.value;
    }
    else{
        return 0;
    }
}

function Counter(){

    const [counter,dispatch]=useReducer(reducer,0);

    function goUp(){
        dispatch({type:"up",value:1})
    }
    function godown(){
        dispatch({type:"down",value:1})
    }
    function Reset(){
        dispatch({type:"Reset"})
    }

    return(
        <>
        <h1>{counter}</h1>
        <button onClick={goUp}>go up</button>
        <button onClick={godown}>go down</button>
        <button onClick={Reset}>Reset</button>
        </>
    )
}
export default Counter;