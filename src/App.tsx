
import { useState } from 'react'
import './App.css'
import Leftbar from './assets/Leftbar'

function App() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <div>
          <h1>Home page</h1>
          <Leftbar />
      </div>
    </div>
  )  
  
}

export default App
