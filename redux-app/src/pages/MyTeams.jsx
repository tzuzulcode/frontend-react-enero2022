import React, { useState } from 'react'
import {FaWindowClose} from 'react-icons/fa'

export default function MyTeams() {
    const [teams,setTeams] = useState([])
    const [modalOpened,setModalOpened] = useState(false)

    const addTeam = (event) =>{
        event.preventDefault()
        const {name,cover,description} = event.target
        const newTeam = {
            name:name.value,
            cover:cover.value,
            description:description.value
        }
        setTeams([...teams,newTeam])
        setModalOpened(false)
    }
    return (
        <div>
            <button onClick={()=>{setModalOpened(true)}}>Agregar team</button>
            <section className='grid grid-cols-3 gap-5 mt-10 '>
                {teams.map(team=><article className='bg-white rounded-md'>
                    <div className='p-5'>
                        <h2 className='font-bold text-2xl'>{team.name}</h2>
                        <p>{team.description}</p>
                    </div>
                    <img className='h-48 w-full object-cover object-center transition-all hover:object-bottom duration-1000 rounded-b-md' src={team.cover} alt={team.name}/>
                </article>)}
            </section>
            {modalOpened&&<div>
                <div className='absolute left-0 top-0 h-screen w-screen bg-black bg-opacity-30' onClick={()=>{setModalOpened(false)}}></div>
                <div className="bg-white w-1/4 absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-lg">
                    <button className='absolute right-5 top-5' onClick={()=>{setModalOpened(false)}}><FaWindowClose className='w-8 h-8 text-lavender-800 hover:text-lavender-600'/></button>
                    <h2 className='p-5 text-lavender-800 text-3xl font-bold'>Create a new team</h2>
                    <form className='flex flex-col p-5' onSubmit={addTeam}>
                        <input className='p-4 bg-lavender-100 outline-none border focus:border-lavender-600 my-5 rounded-md' name='name' placeholder='Name...' type="text" />
                        <input className='p-4 bg-lavender-100 outline-none border focus:border-lavender-600 my-5 rounded-md' name='cover' placeholder='Cover...' type="text" />
                        <input className='p-4 bg-lavender-100 outline-none border focus:border-lavender-600 my-5 rounded-md' name='description' placeholder='Description...' type="text" />
                        <button className='bg-lavender-900 mt-5 py-4 text-xl font-bold text-lavender-100 rounded-md'>Crear equipo</button>
                    </form>
                </div>
            </div>}
        </div>
    )
}
