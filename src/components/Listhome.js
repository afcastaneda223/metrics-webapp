import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCocktail } from '../redux/home/home';

function Listhome() {
  const dispatch = useDispatch();
  const fetchApi = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

  const myCocktailArray = useSelector((state) => state.cocktails);

  useEffect(() => {
    const apiCocktail = async () => {
      const fetchCocktail = await fetch(fetchApi);
      const cocktails = await fetchCocktail.json();
      return dispatch(getCocktail(cocktails));
    };
    if (myCocktailArray.length === 0) {
      apiCocktail();
    }
  }, []);

  return (
    <div>
      <div className="row row-cols-2 border-0 m-0 p-0 ">
        {myCocktailArray.map((cocktail) => (
          <div className="col m-0 p-0 mainbg" key={cocktail.Ingredient}>
            <div className="card border-0 main-c2 rounded-0">
              <img src={cocktail.url} className="card-img opacity-75 rounded-0" alt="..." />
              <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                <h5 className="card-title text-end fw-bolder">{cocktail.Ingredient}</h5>
                <p className="card-text fw-light text-end">
                  {/* { myCocktailArray.length} */}
                  {/* {' '} */}
                  Options
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listhome;
