import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Cart';
import productsReducer from './Products';
export default configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer
  },
})