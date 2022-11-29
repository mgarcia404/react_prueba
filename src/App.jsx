import React from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import TaskExample from './components/TaskExample'

function App() {
  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p-10'>
        <TaskForm />
        <TaskList />
        <TaskExample />
      </div>
    </main>
  )
}

export default App