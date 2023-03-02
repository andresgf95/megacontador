import { useState } from 'react';

function NovoBoton({texto, operador, type="primary"}) {

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
    {texto}
  </button>
  )
}

export default NovoBoton;