import { useState } from 'react'
import './App.css'
import { Tabuada } from './components/Tabuada' 

function App() {
  const [numero, setNumero] = useState('')

  const lidarComMudanca = (e) => {
    const valorDigitado = e.target.value;
    if (valorDigitado === '') {
      setNumero('');
      return;
    }
    
    if (/^\d*$/.test(valorDigitado)) {
      setNumero(valorDigitado.slice(0, 10));
    }
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
          value={numero}
          onChange={lidarComMudanca} 
          placeholder="Ex: 7"
        />
      </div>

      <Tabuada numero={numero}/>
    </div>
  )
}

export default App