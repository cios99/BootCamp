import { useState } from 'react'
import './App.css'

/*     
En este demo crearemos una aplicacion que monitoree nuestros pagos
Cada mes nosotros tenemos que pagar las cuentas (renta, internet, electricidad y gas) el objetivo es realizar una aplicacion cool
que nos recuerde por asi decirlo, cuales son estos pagos, lo haremos con REACT.

Como funciona:
 Cuando la app se abre por primera vez, te pide agregar tu primera categoria de pago, como electricidad o gas. 
 despues de que agregas la categoria de nombre, tienes que agregar el pago para esa categoria.
 agregas unas cuantas y puedes ver todos los pagos juntos. 
 puedes remover cada pago haciendo clic en la x de al lado.
 ademas puedes agregar nuevas categorias pulsando el boton + justo arriba a la derecha y clickeando una categoria en el filtro de navegacion puedes filtrar las cuentas 
 por categoria. 
*/

function App() {
  return (
    <div>
      <p className='text-blue-500'> Hello World</p>
    </div>
  )
}

export default App
