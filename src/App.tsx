import { useEffect, useState } from 'react'
import {startContainer} from "./../webcontainer"
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   startContainer()
  // }, [])

  return (
    <>
    <div>
      <Navbar/>
      <div className='waitlist'>
        <form className='waitlist-form'>
          <h2>Join the waitlist</h2>
          <input type="text" name="name" placeholder='Your name' required/>
          <input type="email" name="email" placeholder='Enter your name' required/>
          <button type="submit" className='submit-btn'>Submit</button>
        </form>
      </div>
    </div>

    </>

  )
}

export default App
