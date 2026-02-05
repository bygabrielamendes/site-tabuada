import { useState } from 'react'
import './App.css'
import { Tabuada } from './components/Tabuada' 

function App() {
  const [numero, setNumero] = useState('')

  const lidarComMudanca = (input) => {
    const valorDigitado = input.target.value;
    if (valorDigitado === '') {
      setNumero('');
      return;
    }
     setNumero(valorDigitado);
  };

  return (
    <div className="container-principal">
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h3 className="titulo-principal">Tabuada Online</h3>
        <p className="texto-instrucao">Digite um número para calcular:</p>
        
        <input 
          type="text" 
          inputMode="numeric"
          className="input-numero"
          maxLength={10}
          onChange={lidarComMudanca} 
          placeholder="Ex: 7"
        />
      </div>

      <Tabuada numero={numero}/>
    </div>
  )
}

export default App