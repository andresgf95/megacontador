import { useEffect, useState } from 'react';
import Boton from './components/boton.jsx';
import NovoBoton from './components/NovoBoton.jsx'

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

  useEffect(
      ()=> {
      let Tempo  
      if (Auto) { 
      Tempo = setTimeout (NumeroDeIncrementos, 1000)}
      return ()=> {clearTimeout(Tempo)}
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
  <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      <div class="btn-group mr-2" role="group" aria-label="First group">
        <Boton texto='+' type='btn-primary' operador={NumeroDeIncrementos}/>
        <Boton texto='-' type='btn btn-secondary' operador={NumeroDeDisminucion}/>
      </div>
      <div class="btn-group mr-2" role="group" aria-label="Second group">
        <button type="button" class="btn btn-secondary">5</button>
        <button type="button" class="btn btn-secondary">6</button>
        <button type="button" class="btn btn-secondary">7</button>
      </div>
      <div class="btn-group" role="group" aria-label="Third group">
        <button type="button" class="btn btn-secondary">8</button>
      </div>







    <>
      <h1>{Valor}</h1>
      <Boton texto='+' operador={NumeroDeIncrementos}/>
      <Boton texto='-' operador={NumeroDeDisminucion}/>
      <NovoBoton texto='Auto' operador={ContadorAuto}/>
      <NovoBoton texto='stop' operador={PararContador}/>
      <NovoBoton texto='Turbo' operador={ContadorTurbo}/>
      <NovoBoton texto='Hiper Turbo' operador={ContadorHiperTurbo}/>
      <NovoBoton texto='Ultra Turbo' operador={ContadorUltraTurbo}/>
      <NovoBoton texto='Reiniciar' operador={Reiniciar}/>
    </>
  </div>

  );
}

export default App;