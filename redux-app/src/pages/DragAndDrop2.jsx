import React, { useState } from 'react'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const getItems = (count, offset = 0) =>
        Array.from({ length: count }, (v, k) => k).map(k => ({
            id: `item-${k + offset}`,
            content: `item ${k + offset}`
        }));

export default function DragAndDrop() {

    const [lista,setLista] = useState(getItems(10))
    const [lista2,setLista2] = useState(getItems(10,10))

    const onDragEnd = ({ source, destination }) => {

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            if (source.droppableId === 'droppable2') {
                setLista2(reorder(
                    lista2,
                    source.index,
                    destination.index)
                )
            }else{
                setLista(reorder(
                    lista,
                    source.index,
                    destination.index)
                )
            }
        } else {

            if(source.droppableId==="droppable"){
                const [origin,dest] = move(
                    lista,
                    lista2,
                    source,
                    destination
                )
                setLista(origin)
                setLista2(dest)
            }else{
                const [origin,dest] = move(
                    lista2,
                    lista,
                    source,
                    destination
                )
                setLista(dest)
                setLista2(origin)
            }

        }
    };

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
    
        return result;
    };
    
    /**
     * Moves an item from one list to another list.
     */
    const move = (source, destination, droppableSource, droppableDestination) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);
    
        destClone.splice(droppableDestination.index, 0, removed);
    
        return [sourceClone,destClone]
    };
    
  return (
    <div className='flex'>
        <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}>
                            {lista.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            >
                                            {item.content}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId="droppable2">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            >
                            {lista2.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            >
                                            {item.content}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
    </div>
  )
}
