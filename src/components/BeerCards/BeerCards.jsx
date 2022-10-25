import React from 'react'
import BeerCard  from '../BeerCard/BeerCard';
import './BeerCards.scss'

const BeerCards = (props) => {
  const {beerArr} = props;
  const cardList = beerArr.map((beer) => (
         <BeerCard beer={beer} key={beer.id} />  
  ))
  return (
    <div className="beerList">
       {cardList}
    </div>
  )
}

export default BeerCards