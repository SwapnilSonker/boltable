import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen bg-black text-white'>
      <h1 className='text-3xl font-bold underline mb-4'>
        Hello Tailwind
      </h1>
      <button className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded'>
        Click Me
      </button>
    </div>
    </>

  )
}

export default App
