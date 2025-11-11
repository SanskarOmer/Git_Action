import { useState ,useEffect } from 'react'

import './App.css'

function App() {
  const [message, setMessage] = useState('');

  useEffect(()=>{
    fetch("http://localhost:5000/api/message")
    .then((res)=> res.json())
    .then ((data)=> setMessage(data.message))
  },[])

  return (
    <>

      <h1>This is my front-end</h1>

      <h2 >
        From Backend : {message}
      </h2>
    </>
  )
}

export default App
