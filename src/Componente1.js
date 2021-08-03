import React,{useState} from 'react';

function Componente({titulo, conteudo}) {
  const [readMore,setReadMore]=useState(false);
  const extraContent=<div>
      <p className="extra-content">
      Pipeline é uma técnica de implementação de
      processadores que permite a sobreposição temporal das
      diversas fases de execução das instruções. Dessa forma, o número de instruções
      executadas simultaneamente aumenta, bem como a eficiência da execução. Um exemplo seria
      lavar roupa: o primeiro passo é colocar as roupas para lavar, logo após é preciso 
      secá-las e depois guardá-las, em uma sequência na qual se a lavadora ou secadora estiverem vazias, elas podem ser usadas enquanto
      a outra ainda está executando a sua tarefa, daí vem a eficiência do pipeline. 
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