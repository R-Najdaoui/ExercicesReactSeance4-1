import React from "react";

const Exercice4 = () => {
  const elems = ["Element1", "Element2", "Element3", "Element4", "Element5"];
  return (
    <ul style={{ listStyleType: "none", color: "blue" }}>
      {elems.map((e, i) => (
        <li key={i}>{e}</li>
      ))}
    </ul>
  );
};

export default Exercice4;
