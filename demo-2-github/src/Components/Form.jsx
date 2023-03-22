import { useState } from "react"

function Form(props){
    const [username, setUsername]=useState('')

// Esta parte del codigo maneja el submit que ocurre cuando el usuario pulsa click en el boton "Add Card".

//se agrega el async por que el metodo .json se regresa en la respuesta.
   async function handleSubmit(event){
//hay que recordar poner esto siempre para evitar el comportamiento de la pagina por defecto, que al pulsar submit la pagina obtenga un get y amonos, se recargue
        event.preventDefault()
//la funcion fetch tambien regresa una promesa, por eso hay que usar el await para esperar a que se resuelva. 
        const response = await fetch(`https://api.github.com/users/${username}`)
//este if maneja las posibles respuestas, es positivo si el status es 200 y si sale algun error, directamente te avienta user not found
        if (response.status===200) {
            const data = await response.json()
            props.onSubmit(data)
            setUsername('')
            //para resetear el username

        }else{
            alert('User not found')
        }
    }
/*-------------------------------------------------------------------------------------------------
Resumen de la funcion anterior: cuando introducimos el username en el campo del input manejado por el form, este nombre esta vinculado a su estado. 
Cuando se pulsa "Add card" el input del form se limpia porque seteamos el username con ''. 
Cuando el form se envia, llamamos al evento handleSubmit y despues de una network call llamamos al props.onSubmit pasando al parent (App) los datos que obtenemos de 
GitHub.
*/
    return <form className="w-full max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mt-10 flex">
            <input
            name="username"
            required
            value={username}
            onChange={(event)=>setUsername(event.target.value)}
            className="form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            />
            <button
            type="submit"
            className="ml-2 py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 
            focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
            Search
            </button>
        </div>
    </form>
}
export default Form