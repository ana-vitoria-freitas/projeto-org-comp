import React,{useState} from 'react';

function Componente({titulo, conteudo}) {
  const [readMore,setReadMore]=useState(false);
  const extraContent=<div>
      <p className="extra-content">
        Falei bastante de instruções, dados e máquinas de lavar roupas, mas como os Hazards são corrigidos na prática?
        No pipeline, existem conjuntos que transmitem os dados para 
        os que estão à sua frente. Para ser mais específica, registradores são agrupados e capazes de comunicar entre si
        para que os dados consigam fluir através do pipeline. Porém, alguns desses conjuntos demoram para processar 
        os dados que serão necessários para outra instrução mais a frente, por isso os Hazards acontecem. Entretanto,
        a arquitetura que descrevi acima não consegue detectar essas falhas do pipeline, pois não possuem um mecanismo
        denominado de "forwarding", o qual é capaz de adiantar determinados dados para que instruções "nop" e troca de lugar de 
        outras instruções não seja mais necessário, evitando que o programador se preocupe com os Hazards. Dessa forma, o pipeline
        exemplificado não é o mais eficiente e por isso deixo aqui outras alternativas de pesquisa e aprofundamento no assunto: <a href="https://www.professores.uff.br/lbertini/wp-content/uploads/sites/108/2017/08/Cap-5-Pipeline.pdf">Piepeline e Hazards</a>

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