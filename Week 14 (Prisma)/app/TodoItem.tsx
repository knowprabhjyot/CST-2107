"use client"

import React from 'react'

interface TodoItemProps {
    data: {
        id: string,
        title: string,
        description: string,
        createdAt: Date,
        completed: boolean
    },
    deleteToDo: (id: string) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ data: { id, title, description, createdAt, completed }, deleteToDo }) => {
    return (
        <div className='m-4 w-96 py-2 px-4 border-2'>

            <div>
                {/* <input type='checkbox' checked={completed} /> */}
                <h2 className='text-xl m-8 font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>{title}</h2>
            </div>
            <p className='text-sm mx-8 font-bold leading-7 text-gray-400 sm:truncate sm:tracking-tight'>{description}</p>
            {/* <p>{new Date(createdAt)}</p> */}

            <button className='bg-red-500 rounded-lg text-white border border-2 p-2 w-full' onClick={() => deleteToDo(id)}>Delete</button>
            
        </div>
    )
}

export default TodoItem;