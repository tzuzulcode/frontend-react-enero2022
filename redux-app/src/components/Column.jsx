import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import TaskList from './TaskList'

export default function Column({list,listId,listType,index}) {
  return (
    <Draggable draggableId={listId} index={index}>
        {(provided,snapshot)=>(
            <div ref={provided.innerRef}{...provided.draggableProps}>
                <Droppable
                    droppableId={listId}
                    type={listType}
                >
                    {(provided, snapshot) => (
                        <div ref={provided.innerRef}>
                            <TaskList list={list} />
                        </div>
                    )}
                </Droppable>
            </div>
        )}
    </Draggable>
  )
}
