// const BOOK_ROCKET = 'BOOK_ROCKET';
// const UNBOOK_ROCKET = 'UNBOOK_ROCKET';
const GET_INGREDIENT = 'GET_INGREDIENT';
const GET_COCKTAIL = 'GET_COCKTAIL';
const initialState = {
  array: [],
  ingredient: null,
};
// const API = '';

// export const bookRocket = (payload) => ({
//   type: BOOK_ROCKET,
//   payload,
// });

// export const unbookRocket = (payload) => ({
//   type: UNBOOK_ROCKET,
//   payload,
// });

export const getIngredient = (payload) => ({
  type: GET_INGREDIENT,
  payload,
});

export const getCocktail = (payload) => ({
  type: GET_COCKTAIL,
  payload,
});

let counter = 0;

const calcTotal = async (x) => {
  const arr = [];
  const fetchDetail = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${x}`);
  const details = await fetchDetail.json();
  arr.push(details.drinks);
  counter = arr[0].length;
  return counter;
};

const createArray = (x) => x.map((key) => ({
  Ingredient: key.strIngredient1,
  url: `https://www.thecocktaildb.com/images/ingredients/${key.strIngredient1}.png`,
  total: calcTotal(key.strIngredient1).then((result) => result),
}));

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENT:
      return { ...state, ingredient: action.payload };

    case GET_COCKTAIL:
      return { ...state, array: createArray(action.payload.drinks) };

    default:
      return state;
  }
};

export default reducer;
