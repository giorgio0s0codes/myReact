import React from "react";


const MiComponente = () => {

    let usuario = {
        nombre: "Giorgio",
        apellidos: "Oso",
        web: "giorgio0s0web.com"
    };

    console.log(usuario)

    return (
        <div className="mi-componente">
            <h2>Componente creado.</h2>
            <h3>Datos del usuario:</h3>
            <ul>
                <li>Nombre: <strong>{usuario.nombre}</strong></li>
                <li>Apellidos: <strong>{usuario.apellidos}</strong></li>
                <li>Web: <strong>{usuario.web}</strong></li>
            </ul>
            <p> Este es mi primer componente.</p>
            <ul>
                <li>
                    React
                </li>
                <li>
                    Ang
                </li>
                <li>
                    Vue
                </li>
            </ul>
        </div>

    );

};

export default MiComponente;
