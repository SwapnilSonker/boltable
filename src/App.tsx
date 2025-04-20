import { useEffect, useState } from 'react'
import {startContainer} from "./../webcontainer"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    startContainer()
  }, [])

  return (
    <>
    <div className='p-4'>
      <h1 className='text-xl font-bold'>Bolt+Lovable IDE</h1>
      <p>Booting your webcontainer</p>
    </div>

    </>

  )
}

export default App
