import React from 'react';
import Componente1 from './Componente1';
import Componente2 from './Componente2';
import Componente3 from './Componente3';
import Componente4 from './Componente4';
import Saudacao from './Saudacao';
import Footer from './footer';

function App() {
  return (
    <div className="Container">
      <Saudacao/>
      <Componente1 titulo="O que é pipeline?" />
      <Componente2 titulo="O que são Hazards?" />
      <Componente3 titulo="Como evitá-los?"/>
      <Componente4 titulo="Para entender melhor"/>
      <Footer/>
    </div>
  );
}

export default App;
