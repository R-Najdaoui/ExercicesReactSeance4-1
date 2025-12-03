import React from "react";

const Exercice10 = () => {
  return (
    <ul>
      {true ? null : <li>Element1</li>}
      <li>Element2</li>
      <li>Element3</li>
    </ul>
  );
};

export default Exercice10;
