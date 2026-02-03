import React from 'react';

// Recebemos "numero" como uma propriedade (props)
export function Tabuada({numero}) {
  
  // Se não tiver número, mostra a mensagem de aguardando
  if (numero === '' || numero === 0) {
    return <p style={{ color: '#555' }}>Aguardando...</p>;
  }

  return (
    <div className="card-tabuada">
      <h2 style={{ color: '#646cff', textAlign: 'center', marginBottom: '20px' }}>
        Tabuada do {numero}
      </h2>
      
      {/* O loop da tabuada */}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <div key={item} className="item-tabuada">
          {/* <span>{numero} x {item} = </span> */}
          <span>{`${numero} x ${item} =`}</span>
          <strong style={{ color: '#00d1ff' }}>
            {Number(numero) * item}
          </strong>
        </div>
      ))}
    </div>
  );
}