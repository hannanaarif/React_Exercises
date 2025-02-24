import { useContext } from "react";
import { AuthContext } from "./Level3";

function Level1() {
  const [auth, setauth] = useContext(AuthContext);

  function add() {
    setauth((prev) => {
      return { ...prev, add: "123" };
    });
  }

console.log("level 1")


  return (
    <>
      <h3>Level 1</h3>

      <button onClick={add}>Add to list</button>
      <p>{JSON.stringify(auth, null, 2)}</p>
    </>
  );
}

export default Level1;
