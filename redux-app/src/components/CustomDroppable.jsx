import React from 'react'
import { Draggable,Droppable } from 'react-beautiful-dnd'

export default function CustomDroppable({lista,id}) {
    
  return (
    <Droppable droppableId={id}>
            {(provided, snapshot) => (
                <div
                className='bg-lavender-300 p-5 mt-5 space-y-5'
                    ref={provided.innerRef}>
                    {lista.map((item, index) => (
                        <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}>
                            {(provided, snapshot) => (
                                <div
                                    className=' bg-lavender-600 text-white p-5'
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    >
                                    {item.content}
                                </div> //Task Item
                            )}
                        </Draggable>
                    ))}{/* Task list */}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
  )
}
