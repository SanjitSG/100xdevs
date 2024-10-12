import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' shadow-lg rounded-lg h-screen w-screen bg-gray-600 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <div className='w-40 p-5 bg-blue-400 m-3'>item 1</div>
        <div className='w-40 p-5 bg-blue-500 shadow-lg shadow-blue-500/50  m-3'>item 2</div>
        <div className='w-40 p-5 bg-blue-100 m-3'>item 3</div>
        <div className='w-40 p-5 bg-blue-400 m-3'>item 1</div>
        <div className='w-40 p-5 bg-blue-500 shadow-lg shadow-blue-500/50  m-3'>item 2</div>
        <div className='w-40 p-5 bg-blue-100 m-3'>item 3</div>
        <div className='w-40 p-5 bg-blue-400 m-3'>item 1</div>
        <div className='w-40 p-5 bg-blue-500 shadow-lg shadow-blue-500/50  m-3'>item 2</div>
        <div className='w-40 p-5 bg-blue-100 m-3'>item 3</div>

      </div>
    </>
  )
}

export default App
