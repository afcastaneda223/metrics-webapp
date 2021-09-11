const GET_ID = 'GET_ID';
const initialState = [];

export const getID = (payload) => ({
  type: GET_ID,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ID:
      return action.payload.drinks.map((key) => ({
        name: key.strDrink,
        image: key.strDrinkThumb,

        instructions: [
          key.strInstructions,
          key.strInstructionsES,
          key.strInstructionsDE,
          key.strInstructionsFR,
          key.strInstructionsIT,
        ],

        ingredients: [
          key.strIngredient1,
          key.strIngredient2,
          key.strIngredient3,
          key.strIngredient4,
          key.strIngredient5,
          key.strIngredient6,
          key.strIngredient7,
          key.strIngredient8,
          key.strIngredient9,
          key.strIngredient10,
          key.strIngredient11,
          key.strIngredient12,
          key.strIngredient13,
          key.strIngredient14,
          key.strIngredient15,
        ],
      }));

    default:
      return state;
  }
};

export default reducer;
