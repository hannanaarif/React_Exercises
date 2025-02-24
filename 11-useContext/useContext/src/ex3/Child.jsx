import { useContext } from "react";
import { context1, context2 } from "./Parent";

function Child() {
  const [NumberState, setNumberState] = useContext(context1);
  const [stringState, setStringState] = useContext(context2);

  return (
    <>
      <h1>{NumberState}</h1>
      <h2>{stringState}</h2>
    </>
  );
}
export default Child;
