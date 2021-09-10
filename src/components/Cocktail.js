import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getID } from '../redux/cocktail/cocktail';

function Cocktail() {
  const dispatch = useDispatch();
  const myDetailID = useSelector((state) => state.details.detailID);
  const fetchApi = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${myDetailID}`;

  const myDetailsID = useSelector((state) => state.cocktail);

  useEffect(() => {
    const apiID = async () => {
      const fetchid = await fetch(fetchApi);
      const detailId = await fetchid.json();
      return dispatch(getID(detailId));
    };
    apiID();
  }, []);

  return (
    <div>
      { myDetailsID.map((details) => (
        <div className="card bg2 border-0" key={details.strDrink}>
          <img src={details.image} className="p-5 bg1 border-0" alt="..." />
          <div className="card-body bg2">
            <h5 className="card-title fw-bold">{details.name}</h5>
            <p>{details.instructions}</p>
            {details.ingredients.map((ingredient) => (
              <div className="list-group" key={details.id}>
                { ingredient != null ? <li className="list-group-item list-group-item-action rounded-0">{ingredient}</li> : null }
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cocktail;
