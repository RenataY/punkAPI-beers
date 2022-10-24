import React, {useState, useEffect} from 'react'
import Navbar from "./containers/Navbar/Navbar"
import Main from "./containers/Main/Main"
import './App.scss'

const App = () => {
  const [searchTerm, setSearchTerm] = useState("") ;
  const [abvChecked, setAbvChecked] = useState(false);
  const [phChecked, setPhChecked] = useState(false);
  const [classicRangeChecked, setClassicRangeChecked] = useState(false);
  
  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  } 
  const handleChange = (event) => {
    setAbvChecked(!abvChecked);  
  }

  const handlePH = (event) => {
    setPhChecked(!phChecked);  
  }

  const handleClassicRange = (event) => {
    setClassicRangeChecked(!classicRangeChecked);  
  }
  
  return (
    <div className="app">
      <Navbar 
        searchTerm={searchTerm} 
        handleInput={handleInput} 
        handleChange={handleChange} 
        handlePH={handlePH}
        handleClassicRange={handleClassicRange}
      />
      <Main 
        searchTerm={searchTerm} 
        abvChecked={abvChecked} 
        phChecked={phChecked} 
        classicRangeChecked={classicRangeChecked}/>     
    </div>
  )
}

export default App