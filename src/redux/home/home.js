const PICK_INGREDIENT = 'PICK_INGREDIENT';
const GET_INGREDIENTS = 'GET_INGREDIENTS';
const initialState = {
  array: [],
  ingredient: null,
};

export const getIngredients = (payload) => ({
  type: GET_INGREDIENTS,
  payload,
});

export const pickIngredient = (payload) => ({
  type: PICK_INGREDIENT,
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
    case PICK_INGREDIENT:
      return { ...state, ingredient: action.payload };

    case GET_INGREDIENTS:
      return { ...state, array: createArray(action.payload.drinks) };

    default:
      return state;
  }
};

export default reducer;
