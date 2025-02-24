import { useContext } from "react";
import { ParentContext } from "./Parent";

function Child() {
  const dispatch = useContext(ParentContext);

  function up(){
    dispatch({ type: "UP", value: 1 });
  }

  return<>
   <button onClick={up}>Go_Up</button>
  </>
}

export default Child;
