import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
    const [tasks, settasks] = useState([])

    function createTask(task) {

        settasks([...tasks, {
            title: task.title,
            id: tasks.length,
            description: task.description
        }])
    }

    function deleteTask(taskId) {
        settasks(tasks.filter(task => task.id !== taskId))//envio el resultado del filter a la funcion
    }

    useEffect(() => {
        settasks(data)
      }, [])

    return (
        <TaskContext.Provider value={{
            tasks,
            deleteTask,
            createTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}

