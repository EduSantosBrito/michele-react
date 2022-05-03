import Title from "./Title";
import SubTitle from "./SubTitle";
import "./style.css";
import foto from "./img/foto.jpg";

function App() {
  return (
    <div className="App">
      <Title className="titulo" />
      <SubTitle className="subtitulo"/>
      <img className ="foto" src={foto}/>
    </div>
  );
}

export default App;
