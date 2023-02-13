import React from 'react';
import emailjs from 'emailjs-com';
import '../styles.css';

const Formulario = () => {

  
    const enviarFormulario = (e) => {
        
      e.preventDefault()
  
      emailjs.sendForm('Personal-emailjs', 'portfolio', e.target , 'CM6V8YAwFi1xffMtB')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })

        e.target.nombre.value = ''
        e.target.email.value = ''
        e.target.telefono.value = ''
        e.target.mensaje.value = ''

    };

    const siguienteInput1 = (e) => {
        if (e.keyCode == 13){
            e.preventDefault()
            document.getElementById('email').focus()
        }
    }
    const siguienteInput2 = (e) => {
        if (e.keyCode == 13){
            e.preventDefault()
            document.getElementById('telefono').focus()
        }
    }
    const siguienteInput3 = (e) => {
        if (e.keyCode == 13){
            e.preventDefault()
            document.getElementById('mensaje').focus()
        }
    }
    const siguienteInput4 = (e) => {
        if (e.keyCode == 13){
            e.preventDefault()
            document.getElementById('submit').focus()
        }
    }
    
    

    
    return(
        <section className='contacto'>
            <h2>Contactame y contame lo que necesitas</h2>
            <p>Por favor contactame enviando un mensaje usando el formulario de contacto y te respodere en la brevedad</p>
            <form className='formulario' onSubmit={enviarFormulario}>
                <div className='formulario__datos'>
                    <input type="text" name="nombre" id="nombre" placeholder="Nombre" onKeyDown={siguienteInput1}/>
                    <input type="email" name="email" id="email" placeholder="email@gmail.com" onKeyDown={siguienteInput2}/>
                    <input type="number" name="telefono" id="telefono" placeholder="Numero de contacto" onKeyDown={siguienteInput3}/>
                </div>
                <input type="text" name="mensaje" id="mensaje" placeholder="Mensaje" onKeyDown={siguienteInput4}/>
                <button type='submit' id='submit'>Enviar mensaje</button>
            </form>
        </section>
    )
}

export { Formulario }