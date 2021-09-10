import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDetail, getDetailID } from '../redux/details/details';

function Listdetails() {
  const dispatch = useDispatch();
  const myCocktailIngredient = useSelector((state) => state.home.ingredient);
  const fetchApi = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${myCocktailIngredient}`;

  const myDetailsArray = useSelector((state) => state.details.array);

  useEffect(() => {
    const apiDetails = async () => {
      const fetchDetail = await fetch(fetchApi);
      const details = await fetchDetail.json();
      return dispatch(getDetail(details));
    };
    apiDetails();
  }, []);

  const selectID = (e) => {
    const x = e.target.id;
    dispatch(getDetailID(x));
  };

  return (
    <Link to="/cocktail" className="m-0 p-0 white container" onClick={selectID}>
      <div className="m-0 p-0">
        {myDetailsArray.map((detail) => (
          <div className="card main-c2" key={detail.id} id={detail.id}>
            <div className="row" id={detail.id}>
              <div className="col align-self-center" id={detail.id}>
                <div className="card-body" id={detail.id}>
                  <p className="card-title fw-bold">{detail.name}</p>
                </div>
              </div>
              <div className="col d-flex justify-content-end" id={detail.id}>
                <img src={detail.image} className="detailsimg" alt="..." id={detail.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Link>
  );
}

export default Listdetails;
