import React from 'react';
import '../styles.css'
import { motion } from "framer-motion"

const Header = () => {
    return(
        <header>
    <motion.h1
        initial={{opacity:.4, scale:2 }}
        animate={{opacity:1, scale:1, y:0}}
        transition={{duration:1.5 , type:'spring', stiffness:120}}
        >Federico<span>.</span></motion.h1>

        <nav>
            <a href="#">Home</a>
            <a href="#">Works</a>
            <a href="#">Services</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
    </header>
    )
}

export { Header }