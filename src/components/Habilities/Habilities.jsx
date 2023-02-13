import React from 'react';
import responsive from './assets/responsive.png'
import web from './assets/web-design.png'
import design from './assets/design-thinking.png'
import '../styles.css'

const Habilities = () => {
    return(
        <section className="habilidades">
        <div className="habilidad">
            <img src={web} alt=""/>
            <h3>Diseño Web</h3>
            <p>Diseños basados en la <br/> construccion de entornos <br/>digitales completos.</p>
        </div>
        <div className="habilidad">
            <img src={design} alt=""/>
            <h3>Programacion</h3>
            <p>Programacion hecha con <br/>los ultimos estandares <br/>de desarrollo.</p>
        </div>
        <div className="habilidad">
            <img src={responsive} alt=""/>
            <h3>Responive</h3>
            <p>Diseños completamente <br/>responsivos para ser visualizados <br/>en cualquier dispositivo.</p>
        </div>
    </section>
    )
}

export { Habilities }