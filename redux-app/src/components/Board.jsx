import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import Column from './Column'

export default function Board({data}) {
  return (
    <DragDropContext onDragEnd={()=>{}}>
        <Droppable 
            droppableId='board'
            type='COLUMN'
            direction='horizontal'
        >
            {(provided,snapshot)=>(
                <div ref={provided.innerRef}>
                    {data.map((list,index)=>(
                        <Column
                            key={list.id}
                            list={list.list}
                            listId={list.id}
                            index={index}
                        />
                    ))
                    }
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    </DragDropContext>
  )
}
