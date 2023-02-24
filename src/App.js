import { useState } from 'react';
import Boton from './boton.jsx';

function App() {

  let [Valor, SetValor] = useState(0)

  function NumeroDeIncrementos () {
    let NumeroTotalIncrementos = Valor + 1
    SetValor(NumeroTotalIncrementos)
  }

  function NumeroDeDisminucion () {
    const NumeroTotalDisminucion = Valor - 1
    SetValor(NumeroTotalDisminucion)
  }

  return (
    <>
      <h1>{Valor}</h1>
      <Boton texto='+' operador={NumeroDeIncrementos}/>
      <Boton texto='-' operador={NumeroDeDisminucion}/>
    </>
  );
}

export default App;
