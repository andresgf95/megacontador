import { useState } from 'react';

function App() {

  let [Valor, SetValor] = useState(0)

  function ClickAumentar () {
    let Aumentar = Valor + 1
    SetValor(Aumentar)
  }

  function ClickDisminuir () {
    let Disminuir = Valor - 1
    SetValor(Disminuir)
  }

  return (
    <>
    <h1>{Valor}</h1>
    <button onClick={ClickAumentar}>Aumentar</button>
    <button onClick={ClickDisminuir}>Disminuir</button>
    </>
  );
}

export default App;
