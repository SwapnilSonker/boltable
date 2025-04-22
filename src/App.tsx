import { useEffect, useState } from 'react'
import {startContainer} from "./../webcontainer"
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [formData, setformData] = useState({
    name : '',
    email : ''
  })

  const [jsonData , setjsonData] = useState([])

  const [showNotification , setShowNotification] = useState(false)

  function handleChange(e){
    const {name , value} = e.target;
    setformData(prev => ({
      ...prev,
      [name] : value,
    }));
  }

  function handleSubmitButton(e){
    e.preventDefault();

    setjsonData(prev => [...prev , formData]);

    setformData({name : ' ' , email : ' '})

    setShowNotification(prev => !prev)
     const audio = new Audio("/confimation.wav")

     audio.play();

     setTimeout(() => {
      setShowNotification(false);

     } , 3000);

    
  }

  useEffect(() => {
    console.log("jsondata " , jsonData)
  }, [jsonData])

  return (
    <>
    <div>
      <Navbar/>
      <div className='waitlist'>
        <form className='waitlist-form' onSubmit={handleSubmitButton}>
          <h2>Join the waitlist</h2>
          <input type="text" name="name" placeholder='Your name' required value={formData.name} onChange={handleChange}/>
          <input type="email" name="email" placeholder='Enter your email' required value={formData.email} onChange={handleChange}/>
          <button type="submit" className='submit-btn'>Submit</button>
        </form>
      </div>
      <div>
      {showNotification && (
          <div style={{
            position: 'absolute',
            top: 10,
            right: 10,
            backgroundColor: '#4caf50', 
            color : 'white',
            padding: '10px 20px',
            borderRadius : '5px',
            boxShadow : '0 2px 8px rgba(0,0,0,0.15)',
            zIndex : 1000,
          }}>
            User added to the Waitlist✅
          </div>
        )}
      </div>
    </div>

    </>

  )
}

export default App
