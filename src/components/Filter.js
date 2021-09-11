import React from 'react';

function Filter() {
//   const container = document.querySelectorAll('#ingCont');
//   const name = document.querySelectorAll('.ingName');

  return (
    <div className="container m-0 p-0">
      <div className="row align-items-center">
        <div className="col">
          <h6 className="">COCKTAILS BY INGREDIENT</h6>
        </div>
        <div className="col">
          <input type="text" id="input" className="form-control" placeholder="Filter by Ingredient" />
        </div>
      </div>
    </div>
  );
}

export default Filter;
