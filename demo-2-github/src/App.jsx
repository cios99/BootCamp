import { useState } from 'react'
import Form from "./Components/Form"
import CardList from "./Components/CardList"
import "./App.css"

function App() {
  //la variable cards tiene se actualiza con su metodo setCards y como valor incial tenemos el arreglo vacio []
  const[cards, setCards]= useState([])

  const addNewCard=(card)=>{
    setCards([...cards, card])
  }
//  const clearCards=()=>{
//    CardList([])
//  }
  return (
    <div>
      <h1 className='pt-10 text-center mt-6 text-3xl leading-9 font-extrabold text-gray-900'>
      Search a GitHub User
      </h1>
      <Form onSubmit={addNewCard}/>
      <CardList cards={cards}/>
    </div>
   // <button onClick={clearCards}>CLEAR</button> (acomodar en linea 22)

//Cuando addNewCard se llama, obtenemos la informacion en su unico parametro card. Podemos llamar setCards(), pasando un nuevo arreglo de cards que concatena a los datos de la tarjeta
//anterior y la nueva card.
  )
}

export default App
