import React, { useState, useEffect } from 'react'
import './Main.scss'
import BeerCards from '../../components/BeerCards/BeerCards'


const Main = (props) => {
  const {searchTerm, abvChecked, phChecked, classicRangeChecked}=props;
  const [beerArr, setBeerArr] = useState([]);
  //const url = "https://api.punkapi.com/v2/beers"
  const url = "https://api.punkapi.com/v2/beers?page=2&per_page=80"
  
  useEffect(()=>{
    getBeers();
  },[]);
  
  const cleanBeer = (beer) => {
    return {
      id: beer.id,
      name: beer.name,
      first_brewed: beer.first_brewed,
      abv: beer.abv,
      description: beer.description,
      image_url: beer.image_url,
      ph: beer.ph
    }
  }
    
  const getBeers = async () => {
    let res=await fetch(url);
    const data = await res.json();
    //console.log(data);
    //console.log(data.length);
    
    // clean the data!
    const newBeers = data.map((beer) => cleanBeer(beer));
    setBeerArr(newBeers);
  }
  
  
  const filteredBeerArr = beerArr.filter((beer) => {
    const beerNameLowCase = beer.name.toLowerCase();
    const firstBrewedYear = beer.first_brewed.slice(-4);
    return beerNameLowCase.includes(searchTerm)
    &&(abvChecked?beer.abv>6:1)
    &&(phChecked?beer.ph<4:1)
    &&(classicRangeChecked?firstBrewedYear<2010:1);
  })

  if (filteredBeerArr.length>0) {
    return (
      <div className="main">
          <BeerCards beerArr={filteredBeerArr}/> 
      </div>
    )
  } else 
  return (
    <div className="main">
          <p>No beers to show, please modify your search</p>
    </div>
  )
 
}

export default Main