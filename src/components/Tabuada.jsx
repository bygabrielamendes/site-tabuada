import React from 'react';

export function Tabuada({ numero }) {
  
  if (numero === '' || numero === 0) {
    return <p className="texto-aguardando">Aguardando...</p>;
  }

  return (
    <div className="card-tabuada">
      <h2 className="titulo-tabuada">
        {`Tabuada do ${numero}`}
      </h2>
      
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <div key={item} className="item-tabuada">
          <span>{`${numero} x ${item} =`}</span>
          <strong className="resultado-destaque">
            {Number(numero) * item}
          </strong>
        </div>
      ))}
    </div>
  );
}