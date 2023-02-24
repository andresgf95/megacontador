import { useState } from 'react';
import Styles from './boton.module.css'

function NovoBoton(props) {

  let [Click, SetClick] = useState(0)

  function FacerClick() {
    const NovoClick = Click + 1
    SetClick(NovoClick)
    }

  return (
  <button className={Styles.Boton} onClick={FacerClick}>{props.texto}({Click})</button>
  )
}

export default NovoBoton;