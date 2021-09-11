/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getIngredients, pickIngredient, selectInput } from '../redux/home/home';

function Listhome() {
  const dispatch = useDispatch();
  const fetchApi = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

  const myCocktailArray = useSelector((state) => state.home.array);
  console.log('logtest', myCocktailArray);
  const myInput = useSelector((state) => state.home.input);

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

  const input = document.getElementById('input');

  const getInput = () => {
    const x = input.value.toLowerCase();
    dispatch(selectInput(x));
  };

  return (
    <>
      <div>
        <div className="container m-0 p-0">
          <div className="row align-items-center">
            <div className="col">
              <h6 className="">COCKTAILS BY INGREDIENT</h6>
            </div>
            <div className="col">
              <input type="text" id="input" className="form-control" onChange={getInput} placeholder="Filter by Ingredient" />
            </div>
          </div>
        </div>
      </div>
      <Link to="/details" className="m-0 p-0 white container" onClick={selectCocktail}>
        <div>
          <div className="row row-cols-2 border-0 m-0 p-0 ">
            { myCocktailArray.filter((filter) => filter.Ingredient.toLowerCase().match(myInput)).map((cocktail) => (
              <div className="col m-0 p-0" key={cocktail.Ingredient} id="ingCont">
                <div className="card border-0 main-c2 rounded-0">
                  <img src={cocktail.url} className="card-img opacity-75 rounded-0" alt="..." />
                  <div className="card-img-overlay h-100 d-flex flex-column justify-content-end" id={cocktail.Ingredient}>
                    <h5 className="card-title text-center fw-bolder ingName" id={cocktail.Ingredient}>{cocktail.Ingredient}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </>
  );
}

export default Listhome;
