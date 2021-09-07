// const BOOK_ROCKET = 'BOOK_ROCKET';
// const UNBOOK_ROCKET = 'UNBOOK_ROCKET';
const GET_COCKTAIL = 'GET_COCKTAIL';
const initialState = [];
// const API = '';

// export const bookRocket = (payload) => ({
//   type: BOOK_ROCKET,
//   payload,
// });

// export const unbookRocket = (payload) => ({
//   type: UNBOOK_ROCKET,
//   payload,
// });

export const getCocktail = (payload) => ({
  type: GET_COCKTAIL,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //     case BOOK_ROCKET:
    //       return state.map((rocket) => {
    //         if (rocket.id !== parseInt(action.payload, 10)) return rocket;
    //         return { ...rocket, reserved: true };
    //       });
    //     case UNBOOK_ROCKET:
    //       return state.map((rocket) => {
    //         if (rocket.id !== parseInt(action.payload, 10)) return rocket;
    //         return { ...rocket, reserved: false };
    //       });
    case GET_COCKTAIL:
      return action.payload.drinks.map((key) => ({
        Ingredient: key.strIngredient1,
        url: `https://www.thecocktaildb.com/images/ingredients/${key.strIngredient1}.png`,
      }));
    default:
      return state;
  }
};

export default reducer;
