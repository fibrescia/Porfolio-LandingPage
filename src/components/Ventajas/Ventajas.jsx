import React from 'react';
import react_img from './assets/programmer.avif'

import '../styles.css'

const Ventajas = () => {
    return(
        <section className='ventajas_lenguajes'>
        <section className="ventajas">
        <ul className="ventajas__lista">
            <h2>Sabemos lo <br/> que <span className="amarillo">Necesitas.</span></h2>
            <li>
                <h3>Calidad todo el tiempo</h3>
                <p>Servicio de calidad y compromiso con el cliente las 24 horas del dia los 365 dias del año.</p>
            </li>
            <li>
                <h3>Innovacion para tu negocio</h3>
                <p>Las ultimas innovaciones en cuanto a diseño, desarrollo y tecnologias para tu web.</p>
            </li>
            <li>
                <h3>Cuidamos tu tiempo</h3>
                <p>Contacto y feedback constante con asistencia y recomendaciones profesionales para tu proyecto.</p>
            </li>
        </ul>
    </section>
{        <div className='fotos'>
        <img src={react_img} alt="" />

        </div>}
    </section>

    )
}

export { Ventajas }