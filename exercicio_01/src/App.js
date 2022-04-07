// Mostre os dados da aplicação
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

import React from "react";
const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  const dados = luana;

  const total = dados.compras
    .map((item) => Number(item.preco.replace("R$", "")))
    .reduce((a, b) => a + b);
  console.log(total);
  return (
    <>
      <p>Nome: {dados.cliente} </p>
      <p>Idade: {dados.idade}</p>
      <p>Total: R$ {total}</p>
      <p>{total > 100 ? "Você Está gastando muito" : ""}</p>
      <p>
        Situação:
        <span style={{ color: dados.ativa ? "green" : "red" }}>
          {" "}
          {dados.ativa ? "Ativo" : "Inativo"}
        </span>
      </p>
    </>
  );
};
export default App;
