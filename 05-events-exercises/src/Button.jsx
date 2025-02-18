


function Button() {
    function handleClick() {    
        console.log('Button clicked! Hello there!');
    }
  return <button onClick={handleClick}>Click me!</button>;
}

export default Button;