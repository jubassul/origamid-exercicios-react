import React from "react";
import Produto from "./Produto";
// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

function App() {
  //setando a prefêrencia no localstorage
  const [produto, setProduto] = React.useState(null);
  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem("produto");
    if (produtoLocal !== null) setProduto(produtoLocal);
    console.log(produtoLocal);
  }, []);
  //guardando no localstorage
  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem("produto", produto);
  }, [produto]);

  //imprindo na tela o que está escrito no button
  function handleClick({ target }) {
    setProduto(target.innerText);
  }
  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick}>NoteBook</button>
      <button onClick={handleClick}>SmartPhone</button>
      <Produto produto={produto} />
    </div>
  );
}

export default App;
