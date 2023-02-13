import React from 'react';
import foto_perfil from './assets/foto-perfil.jpg'
import '../styles.css'
import { motion } from "framer-motion"

const Hero = () => {
    return(
        <section className="hero">
        <div className="carta_presentacion">
            <h1>Federico Brescia</h1>
            <h1 className="titulo2">Diseñador y Programador</h1>
            <p>Soy un diseñador web con diplomatura en Full Stack Developer viviendo en Buenos Aires.</p>
            <p>Estoy haciendo mis primeros años de experiencia.</p>
        </div>
        <motion.img 
        initial={{opacity:.2}}
        animate={{opacity:1,}}
        transition={{duration:1.5, delay:.5}}
        className="foto_perfil" src={foto_perfil} alt="Foto de perfil"/>
    </section>
    )
}

export { Hero }