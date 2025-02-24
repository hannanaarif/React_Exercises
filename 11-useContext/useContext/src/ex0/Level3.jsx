import { createContext } from "react";
import { useState } from "react";
import Level2 from "./Level2";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();


function Level3() {

  const AuthInitialValue = { Name: "Aarif", loggedIn: true };
  const [auth, setauth] = useState(AuthInitialValue);

  console.log("Level 3")

  return (
    <>
      <AuthContext.Provider value={[auth, setauth]}>
        <Level2/>
      </AuthContext.Provider>
    </>
  );
}
export default Level3;

