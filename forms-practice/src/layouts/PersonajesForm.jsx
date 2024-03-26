import React, { useState } from 'react'
/*
   Porps: name ,faction, profession, race

   1.Crear el formulario.
   */
export const PersonajesForm = () => {

    const [character, setCharacter] = useState([]);
    //Metodo para prevenir la recarga de la página.
    const submitForm = (event) => {
        event.preventDefault();
        //Guardo el character con las props de los inputs obtenidos del evento
        const character = {
            name: event.target[0].value,
            faction: event.target[1].value,
            profession: event.target[2].value,
            race: event.target[3].value

        }
        setCharacter(character)
        console.log(character)

        document.querySelectorAll(".char-form-input").forEach((input) => (
            input.value = ""
        ))
    }

    return (
        <>
            <h3></h3>
            <form onSubmit={submitForm} className='char-form'>
                <input type="text" className='char-form-input' placeholder='Name' name='name' />
                <input type="text" className='char-form-input' placeholder='Faction' name='faction' />
                <input type="text" className='char-form-input' placeholder='Profession' name='profession' />
                <input type="text" className='char-form-input' placeholder='Race' name='race' />
                <br />
                <button type='submit'>Guardar</button>
            </form>
        </>
    )
}
