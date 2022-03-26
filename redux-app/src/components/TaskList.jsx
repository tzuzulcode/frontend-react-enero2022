import React from 'react'
import {Draggable} from 'react-beautiful-dnd'
import TaskItem from './TaskItem'

export default function TaskList({list}) {
  return list.map((task,index)=><Draggable
    key={task.id}
    draggableId={task.id}
    index={index}
  >
      {(provided,snapshot)=>(
          <TaskItem
            content={task}
            provided={provided}
          />
      )}

  </Draggable>)
}
