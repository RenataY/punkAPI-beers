import React from 'react'
import './BeerCards.scss'

const BeerCards = (props) => {
  const {beerArr} = props;
  const cardList = beerArr.map((beer) => (
    <div className="beerCard" key={beer.id}>
      <img
        className="beerCard__img"
        src={beer.image_url}
        alt={beer.name}
        key={beer.id}
      />  
      <div className="beerCard__info">
        <p className="beerCard__info__name">{beer.name}</p>
        <p className="beerCard__info__description">{beer.description}</p>
        <div className="beerCard__info__details">
          <p className="beerCard__info__abv">ABV {beer.abv}</p>
          <p className="beerCard__info__ph">PH {beer.ph}</p>
          <p className="beerCard__info__firstBrewed">First brewed {beer.first_brewed}</p>
        </div>
       
      </div>
    </div>
  ))
  return (
    <div className="beerList">
       {cardList}
    </div>
  )
}

export default BeerCards