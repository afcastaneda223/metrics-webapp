const GET_DETAIL = 'GET_DETAIL';
const GET_DETAILID = 'GET_DETAILID';
const initialState = {
  array: [],
  detailID: null,
};

export const getDetail = (payload) => ({
  type: GET_DETAIL,
  payload,
});

export const getDetailID = (payload) => ({
  type: GET_DETAILID,
  payload,
});

const createDetailArray = (x) => x.map((key) => ({
  name: key.strDrink,
  image: key.strDrinkThumb,
  id: key.idDrink,
}));

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL:
      return { ...state, array: createDetailArray(action.payload.drinks) };

    case GET_DETAILID:
      return { ...state, detailID: action.payload };

    default:
      return state;
  }
};

export default reducer;
