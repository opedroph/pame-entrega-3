import React from "react";
import './geral.css'
import Header from './componentes/header'
import Info from './componentes/info'
import Footer from "./componentes/footer";
import Produtos from './componentes/produtos'


function App() {
  return (
    <>
      <Header/>
      <Info/>
      <Produtos/>
      <Footer />
    </>
  );
}

export default App;
