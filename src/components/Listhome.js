import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getIngredients, pickIngredient } from '../redux/home/home';

function Listhome() {
  const dispatch = useDispatch();
  const fetchApi = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

  const myCocktailArray = useSelector((state) => state.home.array);

  useEffect(() => {
    const apiCocktail = async () => {
      const fetchCocktail = await fetch(fetchApi);
      const cocktails = await fetchCocktail.json();
      return dispatch(getIngredients(cocktails));
    };
    if (myCocktailArray.length === 0) {
      apiCocktail();
    }
  }, []);

  const selectCocktail = (e) => {
    const x = e.target.id;
    dispatch(pickIngredient(x));
  };

  return (
    <Link to="/details" className="m-0 p-0 white container" onClick={selectCocktail}>
      <div>
        <div className="row row-cols-2 border-0 m-0 p-0 ">
          { myCocktailArray.map((cocktail) => (
            <div className="col m-0 p-0" key={cocktail.Ingredient}>
              <div className="card border-0 main-c2 rounded-0">
                <img src={cocktail.url} className="card-img opacity-75 rounded-0" alt="..." />
                <div className="card-img-overlay h-100 d-flex flex-column justify-content-end" id={cocktail.Ingredient}>
                  <h5 className="card-title text-center fw-bolder" id={cocktail.Ingredient}>{cocktail.Ingredient}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default Listhome;
