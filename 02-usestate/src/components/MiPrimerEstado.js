import React, {useState} from 'react'

export const MiPrimerEstado = () => {

    /*
    //Problematica

    let nombre = "Giorgio Oso";

    const cambiarNombre = e => {
        nombre = "Giorgio Girard"
    }
    */

    const [nombre, setNombre ] = useState("Giorgio Oso");
    const cambiarNombre = (e, nombreFijo) => {

        setNombre(nombreFijo);
        console.log(e.target);
    }

  return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>
        <strong className='label'>
            {nombre}
        </strong>
        &nbsp;
        <button onClick = { e => cambiarNombre(e, "Giorgio Girard")}>Cambiar a nuevo nombre.</button>
        &nbsp;
        <input type="text" onKeyUp = { e => cambiarNombre(e, e.target.value)} placeholder='Cambia el nombre'></input>


    </div>

  )
}
