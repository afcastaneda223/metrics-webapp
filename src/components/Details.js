import React from 'react';
import { useSelector } from 'react-redux';

import Listdetails from './Listdetails';

function Details() {
  const myCocktailArray = useSelector((state) => state.cocktails.ingredient);

  return (
    <>
      <div>
        <div className="card border-0">
          <div className="row g-0 main-c1">
            <div className="col">
              <img src={`https://www.thecocktaildb.com/images/ingredients/${myCocktailArray}.png`} className="img-fluid rounded-0 opacity-75" alt="..." />
            </div>
            <div className="col align-self-center">
              <div className="card-body">
                <h5 className="card-title fw-bolder text-uppercase">{myCocktailArray}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h6 className="text-uppercase">
        COCKTAILS WITH
        {' '}
        {myCocktailArray}
      </h6>
      <Listdetails />
    </>
  );
}

export default Details;
