import React from "react";
import Header from "./Header";
import Home from "./Home";
import Produtos from "./Produtos";
const App = () => {
  const { pathname } = window.location;
  let Pagina = Home;

  if (pathname === "/produtos") {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }
  return (
    <>
      <Header />
      <Pagina />
    </>
  );
};

export default App;
