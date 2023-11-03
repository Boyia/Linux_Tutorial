
import { useState } from 'react'
import './App.css'
import Leftbar from './assets/Leftbar'

function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className='flex'>
      <div className={`w-96 h-screen bg-dark-purple relative`}>
        <img src="./arrow-1.jpg" className='absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-purple'></img>
      </div>
      
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
          
          <h1>Home page</h1>
          <Leftbar />
      </div>
    </div>
  )  
  
}

export default App
