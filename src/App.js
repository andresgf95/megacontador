import { useEffect, useState } from 'react';
import Boton from './components/boton.jsx';
import NovoBoton from './components/NovoBoton.jsx';
import styles from './App.css';

function App() {

  let [Valor, SetValor] = useState(0)
  let [Auto, SetAuto] = useState(false)
  let [Turbo, SetTurbo] = useState(false)
  let [HiperTurbo, SetHiperTurbo] = useState(false)
  let [UltraTurbo, SetUltraTurbo] = useState(false)

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
    SetAuto(false) || SetTurbo(false) || SetHiperTurbo(false)  || SetUltraTurbo(false) 
  }

  function ContadorTurbo() {
    SetTurbo(true)
  }

  function ContadorHiperTurbo() {
    SetHiperTurbo(true)
  }

  function ContadorUltraTurbo() {
    SetUltraTurbo(true)
  }

  function Reiniciar() {
    let Reinicio = 0
    SetValor(Reinicio)
  }

  useEffect (
      ()=> {
      let Tempo
      let SuperTempo  
      if (Auto) { 
      Tempo = setTimeout (NumeroDeIncrementos, 1000)}
    },
  )

  useEffect(
    ()=> {
      let SuperTempo
      if (Turbo) {
        SuperTempo = setTimeout (NumeroDeIncrementos, 100)}
        return ()=> {clearTimeout(SuperTempo)}
    },
  )

  useEffect(
    ()=> {
      let HiperTempo
      if (HiperTurbo) {
        HiperTempo = setTimeout (NumeroDeIncrementos, 10)}
        return ()=> {clearTimeout(HiperTempo)}
    },
  )

  useEffect(
    ()=> {
      let UltraTempo
      if (UltraTurbo) {
        UltraTempo = setTimeout (NumeroDeIncrementos, 1)}
        return ()=> {clearTimeout(UltraTempo)}
    },
  )

  return (
    <>
      <h1>{Valor}</h1>
      <div className={styles.App} class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group mr-2" role="group" aria-label="First group">
          <Boton texto='+' operador={NumeroDeIncrementos} type="primary" />
          <Boton texto='-' operador={NumeroDeDisminucion} type="secondary" />
        </div>
        <div class="btn-group mr-2" role="group" aria-label="Second group">
          <NovoBoton texto='Auto' operador={ContadorAuto} type="info" />
          <NovoBoton texto='Turbo' operador={ContadorTurbo} type="info" />
          <NovoBoton texto='Super Turbo' operador={ContadorHiperTurbo} type="info" />
          <NovoBoton texto='Ultra Turbo' operador={ContadorUltraTurbo} type="info" />
        </div>
        <div>
          <NovoBoton texto='STOP' operador={PararContador} type="danger" />
          <NovoBoton texto='Reiniciar' operador={Reiniciar} type="warning" />
        </div>
      </div>
    </>
  );
}

export default App;