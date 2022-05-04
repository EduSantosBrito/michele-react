import Title from "./Title";
import SubTitle from "./SubTitle";
import "./style.css";
import foto from "./img/foto.jpg";
import { useState } from "react";

function App() {
  const [count, setCount] = useState("");
  const [count2, setCount2] = useState(2);

  return (
    <div className="App">
      <Title className="titulo" />
      <SubTitle className="subtitulo" />
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <input
        type="text"
        value={count}
        onChange={(event) => setCount(event.target.value)}
      />
      <button onClick={() => setCount2(count2 + 1)}>add count2 +</button>
      <img className="foto" src={foto} />
    </div>
  );
}

export default App;
