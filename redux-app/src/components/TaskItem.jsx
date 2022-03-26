import React from 'react'

export default function TaskItem({content,provided}) {
  return (
    <div className=' bg-lavender-600'
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
    >
        <p>{content}</p>
    </div>
  )
}
