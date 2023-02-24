import { useState } from 'react';

function Boton(props) {

  let [Click, SetClick] = useState(0)

  function BotonClick() {
    const NovoClick = Click + 1
    SetClick(NovoClick)
    props.operador()
    }

  return (
  <button onClick={BotonClick}>{props.texto}({Click})</button>
  )
}

export default Boton;