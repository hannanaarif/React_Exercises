/*
    1. Create a new Vite React project

    2. Create an GuessNumber.jsx with an GuessNumber component
       that is exported

    3. Inside GuessNumber, a text <input> element, a <button>
       with the text 'Guess!' inside, and an empty <p> element

    4. When the component mounts, generate a random integer/whole
       number between 1-10. Store this in a reference and do not
       render it to the DOM.

    5. Your goal is to enter a number in the text box and click
       "Guess" to guess the secret number. If you guess too high,
       the <p> should say "Too high!", if you guess too low it should
       say "Too low!" and if you guess correctly, it should say
       "You win!"

    6. Replace the <App /> in main.jsx with your GuessNumber
       component and test that it works in your Browser

    HINT*  console.log the number while you test

    BONUS* Make the game automatically restart a few seconds
           after you guess correctly and with a new random
           number to guess
*/

import { useEffect, useRef } from "react";

function GuessNumber() {
  const randomNumberRef = useRef(0);
  const inputRef = useRef(0);
  const pRef = useRef(0);

  function getRandomNumber() {
    randomNumberRef.current = Math.floor(Math.random() * 10) + 1;
    console.log("Generated random number:", randomNumberRef.current);
  }

  useEffect(() => {
    getRandomNumber();
  }, []);

  function handlefunction() {
    if (randomNumberRef.current < Number(inputRef.current.value)) {
      pRef.current.textContent = "Too High";
    } else if (randomNumberRef.current > Number(inputRef.current.value)) {
      pRef.current.textContent = "Too low!";
    } else {
      pRef.current.textContent = "You win";
      setTimeout(() => {
        inputRef.current.value = "";
        pRef.current.textContent = "";
      }, 3000);
    }
  }
  console.log("hi there");

  //   const handleInputchange =(e)=>{
  //     inputRef.current = e.target.value;onChange={handleInputchange}
  //   }
  return (
    <>
      <input type="number" ref={inputRef} />
      <button onClick={handlefunction}>Guess</button>
      <p ref={pRef}></p>
    </>
  );
}

export default GuessNumber;
