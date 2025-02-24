import { useContext } from "react";
import { myContext } from "./Parent";

function Child() {
  const [string, setString] = useContext(myContext);

  function word(){
    setString("Finish")
  }

  console.log("Child");

  return (
    <>
      <h1>{string}</h1>
      <button onClick={word}>switch string</button>
    </>
  );
}
export default Child;
