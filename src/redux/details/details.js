// const BOOK_ROCKET = 'BOOK_ROCKET';
// const UNBOOK_ROCKET = 'UNBOOK_ROCKET';
const GET_DETAIL = 'GET_DETAIL';
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

export const getDetail = (payload) => ({
  type: GET_DETAIL,
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
