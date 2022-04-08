import React from "react";

function App() {
  //criando meus estados
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificao, setNotificao] = React.useState(null);
  const timeoutRef = React.useRef();
  function handleClick() {
    setCarrinho(carrinho + 1);
    clearTimeout(timeoutRef.current);
    setNotificao("Item adicionado ao carrinho");
    timeoutRef.current = setTimeout(() => {
      setNotificao(null);
    }, 3000);
  }
  return (
    <div>
      <p>{notificao}</p>
      <button onClick={handleClick}>adicionar Carrinho {carrinho}</button>
    </div>
  );
}

export default App;
