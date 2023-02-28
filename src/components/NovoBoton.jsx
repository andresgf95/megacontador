import { useState } from 'react';
//import Styles from './boton.module.css'//

function NovoBoton({texto, operador}) {

  let [Click, SetClick] = useState(0)

  function BotonClick() {
    const NovoClick = Click + 1
    SetClick(NovoClick)
    operador()
    }

  return (
  <button onClick={BotonClick}>{texto}</button>
  )
}

export default NovoBoton;