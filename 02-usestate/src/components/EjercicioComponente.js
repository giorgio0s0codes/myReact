import React, {useState} from 'react'

export const EjercicioComponente = ({year}) => {

    const [yearNow, setYearNow] = useState(year);

    const siguiente = e =>{
        setYearNow(yearNow+1);
    }

    const anterior = e =>{
        setYearNow(yearNow-1);
    }

  return (
    <div>
        <h2>Ejercicio con Eventos y UseState</h2>
        <strong className='label label-green'>

            {yearNow}

        </strong>
        <p>
            <button onClick={anterior}>Anterior</button>
            &nbsp;
            <button onClick={siguiente}>Siguiente</button>
        </p>
    </div>
  )
}
