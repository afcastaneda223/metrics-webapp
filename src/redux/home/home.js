const GET_INGREDIENT = 'GET_INGREDIENT';
const GET_COCKTAIL = 'GET_COCKTAIL';
const initialState = {
  array: [],
  ingredient: null,
};

export const getIngredient = (payload) => ({
  type: GET_INGREDIENT,
  payload,
});

export const getCocktail = (payload) => ({
  type: GET_COCKTAIL,
  payload,
});

const calcTotal = async (x) => {
  let counter = 0;
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
  total: calcTotal(key.strIngredient1),
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
