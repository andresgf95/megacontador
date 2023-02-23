import { useState } from 'react';

function App() {

  let [Valor, SetValor] = useState(0)
  let [ValorIncremento, SetValorIncremento] = useState(0)
  let [ValorDisminucion, SetValorDisminucion] = useState(0)

  function ClickAumentar () {
    let Aumentar = Valor + 1
    SetValor(Aumentar)
  }

  function ClickDisminuir () {
    let Disminuir = Valor - 1
    SetValor(Disminuir)
  }

  function NumeroDeIncrementos () {
    const NumeroTotalIncrementos = ValorIncremento + 1
    SetValorIncremento(NumeroTotalIncrementos)
    ClickAumentar()
  }

  function NumeroDeDisminucion () {
    const NumeroTotalDisminucion = ValorDisminucion - 1
    SetValorDisminucion(NumeroTotalDisminucion)
    ClickDisminuir()
  }

  return (
    <>
    <h1>{Valor}</h1>
    <button onClick={NumeroDeIncrementos}>+{ValorIncremento}</button>
    <button onClick={NumeroDeDisminucion}>-{ValorDisminucion}</button>
    </>
  );
}

export default App;
