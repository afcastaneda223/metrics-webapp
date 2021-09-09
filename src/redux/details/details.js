const GET_DETAIL = 'GET_DETAIL';
const initialState = [];

export const getDetail = (payload) => ({
  type: GET_DETAIL,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL:
      return action.payload.drinks.map((key) => ({
        name: key.strDrink,
        image: key.strDrinkThumb,
        id: key.idDrink,
      }));

    default:
      return state;
  }
};

export default reducer;
