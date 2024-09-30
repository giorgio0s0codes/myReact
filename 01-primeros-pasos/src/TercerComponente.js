import React from 'react';
import PropTypes from "prop-types";

export const TercerComponente = ({nombre,apellidos, ficha}) => {


  return (
    <div>
        <h1>Comunicación entre componentes.</h1>
        <ul>
            <li>{nombre}</li>
            <li>{apellidos}</li>
            <li>{ficha.grupo}</li>
            <li>{ficha.estado}</li>
        </ul>
    </div>
  )
}

TercerComponente.propTypes = {
  nombre: PropTypes.string,
  apellidos: PropTypes.string,
  ficha: PropTypes.object
}
