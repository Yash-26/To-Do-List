import React, { useState } from 'react'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

type items = {
    id: number,
    task: string,
    status: boolean
}

const Todo = () => {

    // Array of items Object
    const [todos, setTodos] = useState<items[]>([])

    // The new task that to be added in the list
    const [newTask, setNewTask] = useState<string>('')

    const addTask = () => {
        if(newTask!='') {
            const newTodo:items = {id: Date.now(),task: newTask, status: false}
            
            setTodos((prevTodo) => {
                const updatedTodo = [...prevTodo,newTodo]

                return updatedTodo
            })
            setNewTask('')
        }

    }

    const statusUpdate = (id:number) => {

        setTodos((prevTodo) => {
            const updateStatus = prevTodo.map((todo) => {
                if(todo.id === id){
                    return {...todo,status:!todo.status}
                }
                else{
                    return todo
                }
            })
            return updateStatus
        })
    }

    const reset = () => {
        setTodos([])
    }

    // Remove individual item from todos
    const removeTodo = (removeItemId:number) => {
        setTodos(prevtodos => prevtodos.filter(todo => todo.id!==removeItemId))

    }






  return (
    <div className="flex flex-col  justify-center items-center mt-16">

        <h1 className='text-xl font-bold mb-10'><span className='text-accentCol'>To Do </span>List</h1>


        <div className="text-center md:flex-row  sm:flex-col md:ml-20">
            <input  className="border rounded-xl shadow-lg shadow-primaryCol p-3 focus:outline-accentCol block mb-5 md:w-96 md:inline md:ml-24 sm:w-72" value={newTask} onChange={(e) => {setNewTask(e.target.value)}} />
            <button className='ml-3 text-textCol border rounded-lg pt-2 pb-2 pl-5 pr-5 bg-accentCol sm:m-0 md:ml-5' onClick={addTask}>Add</button>
            <button className='ml-4 text-textCol border rounded-lg p-2 bg-primaryCol' onClick={reset}>Clear All</button>
        </div>
        <ul className='text-center'>
        {
            todos.map((todo) => (
                <li key = {todo.id}  className={`hover:cursor-pointer mt-5 text-textCol ${todo.status ? 'line-through decoration-accentCol' : 'none'} bg-secondaryCol rounded-lg p-2 shadow-lg shadow-primaryCol hover:bg-primaryCol`}>
                    {todo.task}  <button onClick={() => statusUpdate(todo.id)}>{todo.status?<UnpublishedIcon className='mr-3 ml-3'></UnpublishedIcon>:<TaskAltIcon className='mr-3 ml-3'></TaskAltIcon>}</button><button onClick={() => removeTodo(todo.id)}><DeleteForeverIcon></DeleteForeverIcon></button>
                </li>
            ))
        }
        </ul>
    </div>
  )
}

export default Todo