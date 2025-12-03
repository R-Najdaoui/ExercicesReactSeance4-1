import React from "react";

const Exercice11 = () => {
  const elems = ["Item1", "Item2", "Item3"];
  return (
    <ul>
      {elems.map((e, i) => (
        <li key={i}>{e}</li>
      ))}
    </ul>
  );
};

export default Exercice11;
