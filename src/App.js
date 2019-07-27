import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";

const App = () => {
  return (
    <div>
      <h1> Adopt Me! </h1>
      <Pet name="Aurora" animal="Gecko" breed="Leopard" />
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
