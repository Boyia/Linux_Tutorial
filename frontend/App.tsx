
import { useState } from 'react';
import './App.css';
import Leftbar from './assets/Leftbar';
import Logininfo from './assets/Logininfo';
import Searchbar from './assets/Searchbar';
import React from 'react';

function App() {
  const [open, setOpen] = useState(true);

  return (
    <>
    <div>
        <Leftbar />
        <div className="p sm:ml-64">
          <Searchbar />
        </div>

    </div>
    </>
    
  )  
  
}

export default App
