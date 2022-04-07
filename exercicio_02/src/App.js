import React from "react";
// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const App = () => {
  const produtos = [
    {
      id: 1,
      nome: "Smartphone",
      preco: "R$ 2000",
      cores: ["#29d8d5", "#252a34", "#fc3766"],
    },
    {
      id: 2,
      nome: "Notebook",
      preco: "R$ 3000",
      cores: ["#ffd045", "#d4394b", "#f37c59"],
    },
    {
      id: 3,
      nome: "Tablet",
      preco: "R$ 1500",
      cores: ["#365069", "#47c1c8", "#f95786"],
    },
  ];
  const dados = produtos.filter((produto) =>
    Number(produto.preco.replace("R$", "") > 1500)
  );
  return (
    <section>
      {dados.map((dado) => (
        <div key={dado.nome}>
          <h1>{dado.nome}</h1>
          <p>Preço: {dado.preco}</p>
          <ul>
            <li style={{ backgroundColor: "red" }}>{dado.cores[0]}</li>
            <li style={{ backgroundColor: "green" }}>{dado.cores[1]}</li>
            <li style={{ backgroundColor: "pink" }}>{dado.cores[2]}</li>
          </ul>
        </div>
      ))}
    </section>
  );
};

export default App;
