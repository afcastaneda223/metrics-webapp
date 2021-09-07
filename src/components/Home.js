import React from 'react';
import { useSelector } from 'react-redux';
import Listhome from './Listhome';

function Home() {
  const myCocktailArray = useSelector((state) => state.cocktails);
  return (
    <>
      <div className="card border-0">
        <div className="row g-0 main-c1">
          <div className="col">
            <img src="https://picsum.photos/500/500" className="img-fluid rounded-start opacity-50" alt="..." />
          </div>
          <div className="col align-self-center">
            <div className="card-body">
              <h5 className="card-title">COCKTAILS</h5>
              <p className="card-text">
                { myCocktailArray.length}
                {' '}
                ingredients total
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h5 className="fs-6">COCKTAILS BY INGREDIENT</h5>
        <Listhome />
      </div>
    </>
  );
}

export default Home;
