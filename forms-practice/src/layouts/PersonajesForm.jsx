import React, { useEffect, useState } from 'react'
import { PersonajesCard } from './PersonajesCard';
import axios from "axios";
/*
   Porps: name ,faction, profession, race

   1.Crear el formulario.
   */
export const PersonajesForm = () => {

    const [characters, setCharacter] = useState([]);
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
        setCharacter([...characters, character])

        document.querySelectorAll(".char-form-input").forEach((input) => (
            input.value = ""
        ))
    }




    useEffect(() => {
        const url = "url Api"
        axios.get(url).then((res) => {
            console.log(res)
        })
    }, [characters])




    useEffect(() => console.log(characters), [characters])

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
            {characters.length == 0 ? <></> :
                <>
                    <div className='table'>

                        <table className='char-table'>

                            <th>
                                <td>Nombre</td>
                                <td>Faccion</td>
                                <td>Profesion</td>
                                <td>Raza</td>
                            </th>

                            {
                                characters.map((char) => {
                                    return (

                                        <PersonajesCard name={char.name} faction={char.faction} profession={char.profession} race={char.race} />
                                    )
                                })

                            }
                        </table>
                    </div>
                </>}

        </>

    )
}
