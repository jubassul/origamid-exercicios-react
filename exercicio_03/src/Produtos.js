import React from "react";
import Titulo from "./Titulo";
const Produtos = () => {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];
  return (
    <div>
      {produtos.map((produto) => (
        <div key={produto.nome}>
          <Titulo texto={produto.nome} />
          <ul style={{ border: "solid" }}>
            {produto.propriedades.map((propriedade) => (
              <li key={propriedade}>{propriedade}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Produtos;
