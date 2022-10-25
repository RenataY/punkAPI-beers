import React from 'react'

const BeerCard = (props) => {
  const {beer} = props;
  return (
    <div className="beerCard" >
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
  )
}

export default BeerCard