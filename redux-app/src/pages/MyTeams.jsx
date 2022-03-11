import React, { useState } from 'react'
import {FaWindowClose} from 'react-icons/fa'

export default function MyTeams() {
    const [teams,setTeams] = useState([])
    const [modalOpened,setModalOpened] = useState(false)

    const addTeam = (event) =>{
        event.preventDefault()
        alert("Creando...")
    }
    return (
        <div>
            <button onClick={()=>{setModalOpened(true)}}>Agregar team</button>
            <section>
                {teams.map(team=><article>
                    <h2>Equipo</h2>
                </article>)}
            </section>
            {modalOpened&&<div className='absolute left-0 top-0 h-screen w-screen bg-black bg-opacity-30 flex justify-center items-center'>
                <div className="bg-white h-1/2 w-1/2 relative">
                    <button className='absolute right-2 top-2' onClick={()=>{setModalOpened(false)}}><FaWindowClose className='w-8 h-8'/></button>
                    <form onSubmit={addTeam}>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <button>Crear equipo</button>
                    </form>
                </div>
                
            </div>}
        </div>
    )
}
