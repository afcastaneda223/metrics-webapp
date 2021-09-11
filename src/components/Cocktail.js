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

  const selectLang = (e) => {
    const lang = document.querySelectorAll('.lang');
    lang.forEach((x) => {
      if (e.target.id !== x.id) {
        x.classList.add('d-none');
      } else if (e.target.id === x.id) {
        x.classList.remove('d-none');
      }
    });
  };

  return (
    <div>
      { myDetailsID.map((details) => (
        <div className="card bg2 border-0" key={details.strDrink}>
          <img src={details.image} className="p-5 bg1 border-0" alt="..." />
          <div className="card-body bg2">
            <p>
              <span className="bg2">
                <button type="button" onClick={selectLang} id="0" className="btn text-white">&nbsp; English &nbsp;</button>
                <button type="button" onClick={selectLang} id="1" className="btn text-white">&nbsp; Español &nbsp;</button>
                <button type="button" onClick={selectLang} id="2" className="btn text-white">&nbsp; Français &nbsp;</button>
                <button type="button" onClick={selectLang} id="3" className="btn text-white">&nbsp; Deutsch &nbsp;</button>
                <button type="button" onClick={selectLang} id="4" className="btn text-white">&nbsp; Italiano &nbsp;</button>
              </span>
            </p>
            <h5 className="card-title fw-bold">{details.name}</h5>
            {details.instructions.map((instruction, i) => (
              <div key={details.id}>
                { instruction != null ? <p id={i} className="lang d-none">{instruction}</p> : null }
              </div>
            ))}
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
