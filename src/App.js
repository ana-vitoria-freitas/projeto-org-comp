import React from 'react';
import Componente1 from './Componente1';
import Componente2 from './Componente1';
import Componente3 from './Componente1';
import Componente4 from './Componente1';
import Saudacao from './Saudacao';
import Footer from './footer';

function App() {
  const conteudo1 = "oi";
  return (
    <div className="Container">
      <Saudacao/>
      <Componente1 titulo="O que é pipeline?" />
      <Componente2 titulo="O que são Hazards?" />
      <Componente3 titulo="Como evitá-los?"/>
      <Componente4 titulo="Exemplos"/>
      <Footer/>
    </div>
  );
}

export default App;
