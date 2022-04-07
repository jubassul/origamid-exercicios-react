import Produto from "./Produto";
import React from "react";
function App() {
  const [dados, setDados] = React.useState(null);

  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }
  return (
    <div className="App">
      <button onClick={handleClick} style={{ margin: ".5rem" }}>
        notebook
      </button>
      <button onClick={handleClick} style={{ margin: ".5rem" }}>
        smartphone
      </button>
      <button onClick={handleClick} style={{ margin: ".5rem" }}>
        tablet
      </button>
      {carregando ? <p>Carregando...</p> : ""}
      {!carregando && dados ? <Produto dados={dados} /> : "sem produtos"}
    </div>
  );
}
export default App;
