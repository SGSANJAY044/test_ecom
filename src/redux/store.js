import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './Cart';
import productsReducer from './Products';
import userReducer from './User'

const reducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  user: userReducer
})
export default configureStore({
  reducer
})