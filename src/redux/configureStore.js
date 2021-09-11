import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import homeReducer from './home/home';
import detailsReducer from './details/details';
import cocktailReducer from './cocktail/cocktail';

const reducer = combineReducers({
  home: homeReducer,
  details: detailsReducer,
  cocktail: cocktailReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
