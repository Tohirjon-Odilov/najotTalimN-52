import React from "react";
import { login } from "../../lib/login";
import Inner from "../Inner/Inner";
import Box from "../Box/Box";

function App() {
  const submitData = async () => {
    await login({ username: "jasur", password: "12345678" });
  };

  return (
    <div>
      <header>
        <Box />
      </header>
      <button onClick={submitData}>Login</button>
      <Inner
        maxWidth={150}
        bgColor={"yellow"}
        type={<React.Fragment>Salom</React.Fragment>}
        element={"salom"}
      />
    </div>
  );
}

export default App;
