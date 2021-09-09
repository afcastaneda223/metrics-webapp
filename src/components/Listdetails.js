import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../redux/details/details';

function Listdetails() {
  const dispatch = useDispatch();
  const myCocktailIngredient = useSelector((state) => state.cocktails.ingredient);
  const fetchApi = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${myCocktailIngredient}`;

  const myDetailsArray = useSelector((state) => state.details);

  useEffect(() => {
    const apiDetails = async () => {
      const fetchDetail = await fetch(fetchApi);
      const details = await fetchDetail.json();
      return dispatch(getDetail(details));
    };
    apiDetails();
  }, []);

  return (
    <div className="m-0 p-0">
      {myDetailsArray.map((detail) => (
        <div className="card main-c2" key={detail.id}>
          <div className="row">
            <div className="col align-self-center">
              <div className="card-body">
                <p className="card-title fw-bold">{detail.name}</p>
              </div>
            </div>
            <div className="col d-flex justify-content-end">
              <img src={detail.image} className="detailsimg" alt="..." />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Listdetails;
