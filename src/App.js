import { useEffect, useState } from 'react';
import Boton from './components/boton.jsx';

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
    <>
      <h1>{Valor}</h1>
      <Boton texto='+' operador={NumeroDeIncrementos}/>
      <Boton texto='-' operador={NumeroDeDisminucion}/>
      <Boton texto='Auto' operador={ContadorAuto}/>
      <Boton texto='stop' operador={PararContador}/>
      <Boton texto='Turbo' operador={ContadorTurbo}/>
      <Boton texto='Hiper Turbo' operador={ContadorHiperTurbo}/>
      <Boton texto='Ultra Turbo' operador={ContadorUltraTurbo}/>
      <Boton texto='Reiniciar' operador={Reiniciar}/>
    </>
  );
}

export default App;