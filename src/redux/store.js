import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './Cart';
import productsReducer from './Products';
import userReducer from './User'
import languageReducer from './Language';
import themeReducer from './Theme'

const reducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  user: userReducer,
  language: languageReducer,
  theme: themeReducer
})
export default configureStore({
  reducer
}) 