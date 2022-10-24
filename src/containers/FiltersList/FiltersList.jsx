import React from 'react'
import './FiltersList.scss'
import FilterItem from '../../components/FilterItem/FilterItem'

const FiltersList = ({handleChange, handlePH, handleClassicRange}) => {
    const abvFilter = "High ABV (>6.0%)";
    const phFilter = "Acidic (ph<4)";
    const classicRangeFilter = "Classic Range";
     
  return (
    <div className="filtersList">
      <FilterItem handleChange={handleChange} filter={abvFilter}/>
      <FilterItem handleChange={handleClassicRange} filter={classicRangeFilter}/>
      <FilterItem handleChange={handlePH} filter={phFilter}/>
     
    </div>
  )
}

export default FiltersList