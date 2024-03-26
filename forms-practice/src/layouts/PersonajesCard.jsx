import React from 'react'

//
export const PersonajesCard = (props) => {
    const name = props.name
    const faction = props.faction
    const profession = props.profession
    const race = props.race
    console.log('Desde card' + name, faction, profession, race)
    return (
        <>

            <tr>
                <td>{name}</td>
                <td>{faction}</td>
                <td>{profession}</td>
                <td>{race}</td>
            </tr>
        </>
    )
}


