import React from 'react'
/*
   Porps: name ,faction, profession, race

   1.Crear el formulario.
   */
export const PersonajesForm = () => {

    //Metodo para prevenir la recarga de la página.
    const submitForm = (event) => {
        event.preventDefault();
        console.log(event.target[0].value)
    }

    return (
        <>

            <form onSubmit={submitForm} className='char-form'>

                <input type="text" className='char-form-input' placeholder='Name' name='name' />
                <input type="text" className='char-form-input' placeholder='Faction' name='faction' />
                <input type="text" className='char-form-input' placeholder='Profession' name='profession' />
                <input type="text" className='char-form-input' placeholder='Race' name='race' />
                <button type='submit'>Guardar</button>
            </form>
        </>
    )
}
