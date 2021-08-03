import React,{useState} from 'react';

function Componente({titulo, conteudo}) {
  const [readMore,setReadMore]=useState(false);
  const extraContent=<div>
      <p className="extra-content">
        É fácil pensar que com mais lavadoras, secadoras e dependendo da quantidade
        de roupas a serem lavadas, eu não preciso parar todo meu processo, já que supostamente
        eu conseguiria lavar todas as roupas sujas de uma só vez, certo? Mas como isso funcionaria no caso do pipeline?
        Utilizando novamente a analogia de lavar roupa, eu posso atrasar a lavagem da leva de roupa que demora mais, pois
        se eu lavar as roupas mais fáceis primeiro, eu já adianto a leva de roupas como um todo e a última leva a ser lavada não irá atrapalhar
        o fluxo de roupas sujas a serem lavadas, pois eu consegui adiantar todo o processo anteriormente. Pensando dessa forma, instruções "nops"
        são como as roupas mais fáceis: elas são lavadas enquanto as outras instruções estão esperando a vez delas de entrarem no processo
      </p>
  </div>
  const linkName=readMore?'Ler menos << ':`${titulo} >> `
  return (
    <div className="App">
      <p className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></p>
      {readMore && extraContent}
    </div>
  );
}

export default Componente;