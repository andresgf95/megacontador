import { useEffect, useState } from 'react';
import Boton from './components/boton.jsx';
import NovoBoton from './components/NovoBoton.jsx';

function App() {

  let [Valor, SetValor] = useState(0)
  let [Auto, SetAuto] = useState(false)

  function NumeroDeIncrementos () {
    let NumeroTotalIncrementos = Valor + 1
    SetValor(NumeroTotalIncrementos)
  }

  function NumeroDeDisminucion () {
    const NumeroTotalDisminucion = Valor - 1
    SetValor(NumeroTotalDisminucion)
  }

  function ContadorAuto () {
    SetAuto(true)
  }

  function PararContador() {
    SetAuto(false)
  }
  
  useEffect(
      ()=> {
      let Tempo  
      if (Auto) { 
      Tempo = setTimeout (NumeroDeIncrementos, 1000)}
      return ()=> {clearTimeout(Tempo)}
    },
  )

  return (
    <>
      <h1>{Valor}</h1>
      <Boton texto='+' operador={NumeroDeIncrementos}/>
      <Boton texto='-' operador={NumeroDeDisminucion}/>
      <Boton texto='Auto' operador={ContadorAuto}/>
      <Boton texto='stop' operador={PararContador}/>
    </>
  );
}

export default App;
