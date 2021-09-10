import React from 'react';
import { useSelector } from 'react-redux';
import Listhome from './Listhome';
import image1 from './assets/cocktails.png';

function Home() {
  const myCocktailArray = useSelector((state) => state.home.array);
  return (
    <>
      <div className="card border-0">
        <div className="row g-0 main-c1">
          <div className="col">
            <img src={image1} className="img-fluid rounded-0" alt="..." />
          </div>
          <div className="col align-self-center">
            <div className="card-body">
              <h5 className="card-title fw-bolder">COCKTAILS</h5>
              <p className="card-text fw-light">
                { myCocktailArray.length }
                {' '}
                ingredients total
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h6>COCKTAILS BY INGREDIENT</h6>
        <Listhome />
      </div>
    </>
  );
}

export default Home;
