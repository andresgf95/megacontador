import './App.css';
import { useState } from 'react';

function App() {

  let [Incrementar, SetIncrementar] = useState(0)

  function Click () {
    let NumeroDeClicks = Incrementar + 1
    SetIncrementar(NumeroDeClicks)
  }

  return (
    <>
    <h1>{Incrementar}</h1>
    <button onClick={Click}>Incrementar</button>
    </>
  );
}

export default App;
