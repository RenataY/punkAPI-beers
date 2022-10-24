import { useState } from 'react'
import './Navbar.scss'
import SearchBox from '../../components/SearchBox/SearchBox'
import FiltersList from '../FiltersList/FiltersList'

const Navbar = (props) => {
  const {searchTerm, handleInput, handleChange, handlePH, handleClassicRange } = props ;
  return (
    <div className="navbar">
        <SearchBox 
            label={"Beers"}
            searchTerm={searchTerm}
            handleInput={handleInput}
        />
        <FiltersList 
          handleChange={handleChange} 
          handlePH={handlePH}
          handleClassicRange={handleClassicRange}
        />
    </div>
  )
}

export default Navbar