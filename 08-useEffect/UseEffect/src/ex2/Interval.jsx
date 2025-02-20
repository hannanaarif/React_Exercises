/*
    1. Create a new Vite React project

    2. Create an Interval.jsx with a Interval component
       inside that you can export.

    3. Add state for a counter which is a number as well
       as an <h1> and a <button>. Have the <h1> display
       the current counter, starting at 0. When you click
       the button, increase the counter by 1.

    4. How would you setup a "setInterval" with a 1 second
       repeat to log out "Interval says hello!" ONLY ONE
       time for this component? (Changing state/re-renders
       should NOT create more or new intervals)

    5. Import Interval in to main.jsx and replace the <App />
       with it to test that it works in your Browser.
*/

import { useEffect, useState } from "react";

function Interval() {

  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  useEffect(() => {
    
      const intervalId = setInterval(() => {
        console.log("Interval says hello!");
      }, 1000);

      return () => {
        clearInterval(intervalId); // ✅ Cleanup function to prevent memory leaks
        console.log("Interval cleared!");
      };
  },[]);


  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleClick}>Get up</button>
    </>
  );
}

export default Interval;
