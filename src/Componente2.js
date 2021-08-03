import React,{useState} from 'react';

function Componente({titulo, conteudo}) {
  const [readMore,setReadMore]=useState(false);
  const extraContent=<div>
      <p className="extra-content">
        Como o processo de lavar roupa requer um passo a passo (lavar, secar e guardar),
        o pipeline funciona da mesma forma. Será que esse processo metódico possui falhas? Sim, e elas
        são denominadas Hazards. Enquanto a lavadora está terminado a lavagem da primeira leva de roupa,
        eu não posso pegar a segunda leva de roupa suja e dar continuidade ao processo. É essa dependência de dados
        que gera o Hazard, pois em uma instrução eu preciso do valor que ainda está sendo calculado por "uma máquina de lavar"
        e sem ele não consigo prosseguir da forma esperada lavando, secando e guardando as "roupas".
      </p>
  </div>
  const linkName= readMore ? 'Ler menos << ':`${titulo} >> `
  return (
    <div className="App">
      <p className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></p>
      {readMore && extraContent}
    </div>
  );
}

export default Componente;