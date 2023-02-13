import React from 'react';
import sophie_video from './assets/sophie-video.mp4' 
import sophie_mobile from './assets/Sophie.png' 
import cash_flow_video from './assets/cash-flow-video.mp4'
import cash_flow_cel from './assets/cash-flow-cel.mp4'
import cash_flow_dia from './assets/cash-flow-dia.png'
import cash_flow_noche from './assets/cash-flow-noche.png'
import snap from './assets/snap.mp4' 
import snap_cel from './assets/snap-cel.mp4'
import '../styles.css'

const Portfolio = () => {
    return(
        <div>
    <section className="portfolio">
        <img src={sophie_mobile} id='sophie'/>
        <video autoPlay='autoplay' muted loop>
            <source src={sophie_video}/>
        </video>
        <video autoPlay='autoplay' muted loop>
            <source src={cash_flow_video}/>
        </video>
        <video autoPlay='autoplay' muted loop>
            <source src={cash_flow_cel}/>
        </video>
        <img src={cash_flow_dia} alt="" />
        <img src={cash_flow_noche} alt="" />
        <video autoPlay='autoplay' muted loop>
            <source src={snap} />
        </video>
        <video autoPlay='autoplay' muted loop>
            <source src={snap_cel} />
        </video>
    </section>
    <section className="portfolio">
        
        
    </section>
    <section className="links">
        <a href="https://fibrescia.github.io/barra-inclinada/" id='sophie'>Sophie's Landpage</a>
        <a href="https://fibrescia.github.io/Cash-flow/">Cash-flow Project</a>
        <a href="https://fibrescia.github.io/tpreact/">Snap Landpage</a>
    </section>
        </div>
    )
}

export { Portfolio }