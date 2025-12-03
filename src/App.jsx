import { useState } from "react";
import "./App.css";

import Exercice1 from "./components/Exercice1";
import Exercice2 from "./components/Exercice2";
import Exercice3 from "./components/Exercice3";
import Exercice4 from "./components/Exercice4";
import Exercice5 from "./components/Exercice5";
import Exercice6 from "./components/Exercice6";
import Exercice7 from "./components/Exercice7";
import Exercice8 from "./components/Exercice8";
import Exercice9 from "./components/Exercice9";
import Exercice10 from "./components/Exercice10";
import Exercice11 from "./components/Exercice11";

function App() {
  const [output, setOutput] = useState(null);

  const exercises = {
    1: () => <Exercice1 />,
    2: () => <Exercice2 />,
    3: () => <Exercice3 />,
    4: () => <Exercice4 />,
    5: () => <Exercice5 />,
    6: () => <Exercice6 />,
    7: () => <Exercice7 />,
    8: () => <Exercice8 />,
    9: () => <Exercice9 />,
    10: () => <Exercice10 />,
    11: () => <Exercice11 />
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Interface Exercices JSX</h2>
      <div>
        {Array.from({ length: 11 }, (_, i) => (
          <button
            key={i}
            style={{ margin: "5px", padding: "10px 15px" }}
            onClick={() => setOutput(exercises[i + 1]())}
          >
            Exercice {i + 1}
          </button>
        ))}
      </div>
      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          border: "1px solid black",
          minHeight: "100px",
          width: "400px"
        }}
      >
        {output}
      </div>
    </div>
  );
}

export default App;
