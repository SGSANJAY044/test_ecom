import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Cart';
import productsReducer from './Products';
import userReducer from './User'
export default configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    user: userReducer
  }
})