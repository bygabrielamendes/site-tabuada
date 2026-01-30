import { useState } from 'react'
import './App.css'
import { Tabuada } from './components/Tabuada' 

function App() {
  const [numero, setNumero] = useState('')

  const lidarComMudanca = (e) => {
    const valorDigitado = e.target.value;
    if (valorDigitado.length > 10) return;
    setNumero(valorDigitado);
  }

  return (
    <div className="container-principal">
      
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h3 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Tabuada Online</h3>
        <p style={{ color: '#ccc' }}>Digite um número para calcular:</p>
        
        <input 
          type="number" 
          className="input-numero"
          value={numero} 
          onChange={lidarComMudanca} 
          placeholder="Ex: 7"
        />
      </div>

      {/*Chamamos o componente e passamos o numero pra ele */}
      <Tabuada numero={numero} />

    </div>
  )
}

export default App