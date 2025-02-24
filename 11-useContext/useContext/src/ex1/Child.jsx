import { useContext } from "react";
import { ParentContext } from "./Parent";

function Child() {
  const ctx = useContext(ParentContext);
  console.log(ctx);
  return <h1>{ctx}</h1>
}

export default Child;
