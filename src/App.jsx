import { useState } from "react";
import "./App.css";
import Exercice1 from "./components/Exercice1";
import Exercice2 from "./components/Exercice2";
import Exercice3 from "./components/Exercice3";
function App() {
  const [output, setOutput] = useState(null);

  const exercises = {
  1: () => <Exercice1 />,
  2: () => <Exercice2 />,
  3: () => <Exercice3 />
};

  return (
    <div style={{ padding: "20px" }}>
      <h2>Interface Exercices JSX</h2>
      <div>
  {Array.from({ length: 3 }, (_, i) => (
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
