import { combineReducers, createStore } from 'redux';
import initialState from './initialState';

import cartReducer from './cartRedux';
import categoriesReducer from './categoriesRedux';
import productsReducer from './productsRedux';
import deviceReducer from './deviceRedux';
import promotionReducer from './promotionRedux';
import bannerReducer from './bannerRedux';
import feedbackReducer from './feedbackRedux';
import brandsReducer from './brandsRedux';

// define reducers
const reducers = {
  banner: bannerReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
  device: deviceReducer,
  feedbacks: feedbackReducer,
  brands: brandsReducer,
  promotion: promotionReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
