import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { get } from '../api'
import {DragDropContext,Droppable,Draggable} from "react-beautiful-dnd"

const data = [
    "https://images.unsplash.com/photo-1647504277331-608dcd69d7b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1647470224859-4973bd0b428c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1647582621141-8c61fd1dac53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1647545756130-23979d9967ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1647504277331-608dcd69d7b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1647470224859-4973bd0b428c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1647582621141-8c61fd1dac53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1647545756130-23979d9967ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
]

export default function Team() {
    const params = useParams()

    const [team,setTeam] = useState()
    const [lists,setLists] = useState(data)
    const [tasks,setTasks] = useState(data)
    
    useEffect(()=>{
        get("/teams/"+params.idTeam)
        .then(res=>{
            setTeam(res.data)
        })
        .catch(error=>console.log(error))
    },[])


    const reorder = (list, startIndex, endIndex) => {
        const result = [...list]; //Generar una copia
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
      
        return result;
    };
    

    const onDragEndList = ({source,destination})=>{
        if(!destination){
            console.log("No hacer nada")
            return
        }
        setLists(reorder(lists,source.index,destination.index))
    }
    const onDragEndTask = ({source,destination})=>{
        if(!destination){
            console.log("No hacer nada")
            return
        }
        setTasks(reorder(tasks,source.index,destination.index))
    }

  return (
    <main className=''>
        <section className='mt-10'>
            <DragDropContext onDragEnd={onDragEndList}>
                <Droppable droppableId='droppable' direction='horizontal'>
                    {(provided,snapshot)=>{
                        return <div 
                            className='flex overflow-x-scroll gap-5'
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                        {lists.map((el,index)=>{
                            return <Draggable key={index} draggableId={""+index} index={index}>
                                {(provided,snapshot)=>{
                                    return <article
                                        className='flex-shrink-0 w-1/3 bg-slate-500'
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        >
                                            <DragDropContext onDragEnd={onDragEndList}>
                                            <Droppable droppableId={'droppable'+index} direction='vertical'>
                                                {(provided,snapshot)=>{
                                                    return <div 
                                                        className=' space-y-5'
                                                        ref={provided.innerRef}
                                                        {...provided.droppableProps}
                                                    >
                                                    {tasks.map((el,i)=>{
                                                        return <Draggable key={"draggable"+index+i} draggableId={"draggable"+index+i} index={i}>
                                                            {(provided,snapshot)=>{
                                                                return <div
                                                                    className='flex-shrink-0 w-full h-10 bg-slate-800'
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    >
                                                                        
                                                                </div>
                                                            }}
                                                        </Draggable>
                                                    })}
                                                    {provided.placeholder}
                                                    </div>
                                                }}
                                            </Droppable>
                                            </DragDropContext>
                                    </article>
                                }}
                            </Draggable>
                        })}
                        {provided.placeholder}
                        </div>
                    }}
                </Droppable>
            </DragDropContext>
        </section>
    </main>
  )
}
