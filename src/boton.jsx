import { useState } from 'react';
import Styles from './boton.module.css'

function Boton({texto, operador}) {

  let [Click, SetClick] = useState(0)

  function BotonClick() {
    const NovoClick = Click + 1
    SetClick(NovoClick)
    operador()
    }

  return (
  <button className={Styles.Boton} onClick={BotonClick}>{texto}({Click})</button>
  )
}

export default Boton;