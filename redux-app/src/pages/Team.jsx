import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { get } from '../api'

export default function Team() {
    const params = useParams()

    const [team,setTeam] = useState()
    
    useEffect(()=>{
        get("/teams/"+params.idTeam)
        .then(res=>{
            setTeam(res.data)
        })
        .catch(error=>console.log(error))
    },[])

    const data = [1,2,3,4,5,6]

  return (
    <main className=''>
        <section className='flex gap-5'>
            {data.map(el=>{
                return <article className='h-screen w-1/3 bg-blue-300'>

                </article>
            })}

        </section>
    </main>
  )
}
