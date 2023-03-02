import { useEffect, useState } from 'react';
import Boton from './components/boton.jsx';
import NovoBoton from './components/NovoBoton.jsx';

function App() {

  let [Valor, SetValor] = useState(0)
  let [Auto, SetAuto] = useState(false)
  let [Turbo, SetTurbo] = useState(false)
  let [HiperTurbo, SetHiperTurbo] = useState(false)
  let [UltraTurbo, SetUltraTurbo] = useState(false)

  function NumeroDeIncrementos() {
    let NumeroTotalIncrementos = Valor + 1
    SetValor(NumeroTotalIncrementos)
  }

  function NumeroDeDisminucion() {
    const NumeroTotalDisminucion = Valor - 1
    SetValor(NumeroTotalDisminucion)
  }

  function ContadorAuto() {
    SetAuto(true) || SetTurbo(false) || SetHiperTurbo(false) || SetUltraTurbo(false)
  }

  function ContadorTurbo() {
    SetTurbo(true) || SetAuto(false) || SetHiperTurbo(false) || SetUltraTurbo(false)
  }

  function ContadorHiperTurbo() {
    SetHiperTurbo(true) || SetAuto(false) || SetTurbo(false) || SetUltraTurbo(false)
  }

  function ContadorUltraTurbo() {
    SetUltraTurbo(true) || SetAuto(false) || SetTurbo(false) || SetHiperTurbo(false)
  }

  function PararContador() {
    SetAuto(false) || SetTurbo(false) || SetHiperTurbo(false) || SetUltraTurbo(false)
  }

  function Reiniciar() {
    let Reinicio = 0
    SetValor(Reinicio)
  }

  useEffect(
    () => {
      let Tempo
      if (Auto) {
        Tempo = setTimeout(NumeroDeIncrementos, 1000)
      }
      return () => { clearTimeout(Tempo) }
    },
  )

  useEffect(
    () => {
      let SuperTempo
      if (Turbo) {
        SuperTempo = setTimeout(NumeroDeIncrementos, 100)
      }
      return () => { clearTimeout(SuperTempo) }
    },
  )

  useEffect(
    () => {
      let HiperTempo
      if (HiperTurbo) {
        HiperTempo = setTimeout(NumeroDeIncrementos, 10)
      }
      return () => { clearTimeout(HiperTempo) }
    },
  )

  useEffect(
    () => {
      let UltraTempo
      if (UltraTurbo) {
        UltraTempo = setTimeout(NumeroDeIncrementos, 1)
      }
      return () => { clearTimeout(UltraTempo) }
    },
  )

  return (
    <body>
      <div class="card">
        <div class="card-body">
          <h1>{Valor}</h1>
        </div>
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div class="btn-group mr-2" role="group" aria-label="First group">
            <Boton texto='+ ' operador={NumeroDeIncrementos} type="primary" />
            <Boton texto='- ' operador={NumeroDeDisminucion} type="secondary" />
          </div>
          <div class="btn-group mr-2" role="group" aria-label="Second group">
            <NovoBoton texto='auto' operador={ContadorAuto} type="info" />
            <NovoBoton texto='turbo' operador={ContadorTurbo} type="info" />
            <NovoBoton texto='super turbo' operador={ContadorHiperTurbo} type="info" />
            <NovoBoton texto='ultra turbo' operador={ContadorUltraTurbo} type="info" />
          </div>
          <div class="btn-group mr-2" role="group" aria-label="Third group">
            <NovoBoton texto='stop' operador={PararContador} type="danger" />
            <NovoBoton texto='reiniciar' operador={Reiniciar} type="warning" />
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;