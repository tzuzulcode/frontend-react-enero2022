import React,{useEffect, useRef} from 'react'

export default function DragAndDrop() {

    const dragElement = useRef()

    const start = (event) =>{
        console.log(event)
        event.target.style.backgroundColor = "red"
        dragElement.current = event.target
    }

    const drop = (event)=>{
        event.target.appendChild(dragElement.current)
        console.log(event)
        event.target.style.backgroundColor = "green"
    }
    const drop2 = (event)=>{
        event.target.appendChild(dragElement.current)
        console.log(event)
        event.target.style.backgroundColor = "green"
    }

    const over = (event) => {
        event.preventDefault()
        event.target.style.backgroundColor = "blue"
    }
    const over2 = (event) => {
        event.preventDefault()
        event.target.style.backgroundColor = "blue"
    }
    const leave = (event)=>{
        event.target.style.backgroundColor = ""
    }

    useEffect(()=>{
        fetch("http://localhost:4000/api/ejemplo")

    },[])

  return (
    <div className='flex'>
        <div className='bg-lavender-300 w-48 h-48' onDrop={drop2} onDragOver={over2} onDragLeave={leave}>
            <div className='bg-beau-500 w-12 h-12' draggable={true} onDragStart={start}>

            </div>
            <div className='bg-beau-500 w-12 h-12' draggable={true} onDragStart={start}>

            </div>
            <div className='bg-beau-500 w-12 h-12' draggable={true} onDragStart={start}>

            </div>
            
        </div>
        <div className='bg-lavender-500 w-48 h-48' onDragOver={over} onDrop={drop}>
            
        </div>
    </div>
  )
}
