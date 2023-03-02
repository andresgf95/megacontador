import { useState } from 'react';

function Boton({texto, operador, type="primary"}) {

  let [Click, SetClick] = useState(0)

  function BotonClick() {
    const NovoClick = Click + 1
    SetClick(NovoClick)
    operador()
    }

  return (
  <button className={
          "btn " +
          ( type === "primary" ? "btn-primary" : "") +
          ( type === "secondary" ? "btn-secondary" : "") +
          ( type === "success" ? "btn-success" : "") +
          ( type === "danger" ? "btn-danger" : "") +
          ( type === "warning" ? "btn-warning" : "") +
          ( type === "info" ? "btn-info" : "") +
          ( type === "ligth" ? "btn-ligth" : "") +
          ( type === "dark" ? "btn-dark" : "")
  }

   onClick={BotonClick}>
    {texto}<span className='badge badge-light'>{Click}</span>
  </button>
  )
}

export default Boton;