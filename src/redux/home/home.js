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

const createArray = (x) => x.map((key) => ({
  Ingredient: key.strIngredient1,
  url: `https://www.thecocktaildb.com/images/ingredients/${key.strIngredient1}.png`,
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
