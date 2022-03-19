import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { get } from '../api'
import {DragDropContext,Droppable,Draggable} from "react-beautiful-dnd"

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

    const data = [
        "https://images.unsplash.com/photo-1647504277331-608dcd69d7b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1647470224859-4973bd0b428c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1647582621141-8c61fd1dac53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1647545756130-23979d9967ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    ]

    const onDragEnd = (algo)=>{
        console.log(algo)
    }

  return (
    <main className=''>

        
        <section className='flex gap-5 overflow-x-scroll'>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId='droppable' direction='horizontal'>
                    {(provided,snapshot)=>{
                        return <div 
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                        {data.map((el,index)=>{
                            return <Draggable key={index} draggableId={""+index} index={index}>
                                {(provided,snapshot)=>{
                                    return <article
                                        ref={provided.innerRef}
                                        className='flex-shrink-0'
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        >
                                        <img src={el} alt="" />
                                    </article>
                                }}
                            </Draggable>
                        })}
                        </div>
                    }}
                </Droppable>
            </DragDropContext>
        </section>
    </main>
  )
}
