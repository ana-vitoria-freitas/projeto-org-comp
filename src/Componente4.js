import React,{useState} from 'react';

function Componente({titulo, conteudo}) {
  const [readMore,setReadMore]=useState(false);
  const extraContent=<div>
      <p className="extra-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab 
        porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 
        commodi officia aliquam! Maxime.
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