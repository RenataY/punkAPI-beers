import React from 'react'
import './BeersContainer.scss'
import beers from '../../data/beers'
import BeerCard from '../../components/BeerCard/BeerCard'

const BeersContainer = (props) => {
    
  return (
    <div className="beers-container">
        <BeerCard beerArr={beers}/>
    </div>
  )
}

export default BeersContainer