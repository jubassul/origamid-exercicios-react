import React from "react";

function Produdo({ dados }) {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <h2>R$ {dados.preco}</h2>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </div>
  );
  //aqui você está renderizando na tela as informações do json
}

export default Produdo;
