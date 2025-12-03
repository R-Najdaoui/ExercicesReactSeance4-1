import React from "react";

const Element = ({ elem, color }) => {
  return <li style={{ color }}>{elem}</li>;
};

const Exercice5 = () => {
  const elems = ["Element1", "Element2", "Element3", "Element4", "Element5"];
  return (
    <ul>
      {elems.map((e, i) => (
        <Element key={i} elem={e} color="green" />
      ))}
    </ul>
  );
};

export default Exercice5;
