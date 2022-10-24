import React from 'react'
import './FilterItem.scss'

const FilterItem = (props) => {
  const {handleChange,filter}=props;

  return (
    <div className="filtersList__filter">
        
        <input 
          type="checkbox" 
          id={filter.toLowerCase()} 
          value={filter} 
          onChange={handleChange}
        />
        <label htmlFor={filter.toLowerCase()}>{filter}</label> 
      
    </div>   
  )
}

export default FilterItem