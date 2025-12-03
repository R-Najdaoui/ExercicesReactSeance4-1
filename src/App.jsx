import { useState } from "react";
import "./App.css";
import Exercice1 from "./components/Exercice1";

function App() {
  const [output, setOutput] = useState(null);

  const exercises = {
    1: () => <Exercice1 />
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Interface Exercices JSX</h2>
      <div>
        <button
          style={{ margin: "5px", padding: "10px 15px" }}
          onClick={() => setOutput(exercises[1]())}
        >
          Exercice 1
        </button>
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
