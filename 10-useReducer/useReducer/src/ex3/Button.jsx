// eslint-disable-next-line react/prop-types
function Button({ text, CounterDispatch, action }) {
  function handleClick() {
    CounterDispatch(action)
  }
  return <button onClick={handleClick}>{text}</button>;
}
export default Button;
