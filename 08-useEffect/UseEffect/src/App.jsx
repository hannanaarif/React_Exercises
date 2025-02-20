import './App.css'
import { useEffect, useState } from 'react'

// eslint-disable-next-line react/prop-types
const Example = ({ count }) => {

  useEffect(() => {
    console.log(`Effect for count: ${count}`);

    return () => {
      console.log(`Cleanup for count: ${count}`);
    };
    
  }, [count]);


  return <h1>Count: {count}</h1>;
};

function App() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Example count={count} />
    </div>
  );
}

export default App
