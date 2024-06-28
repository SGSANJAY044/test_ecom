import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentCart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartData: (state, action) => {
      if (state.currentCart.find((product) => product.id === action.payload.id) !== undefined) {
        state.currentCart=state.currentCart.map((product)=>{
          if (product.id === action.payload.id) {
                return {...product,cartCount:product.cartCount+action.payload.cartCount}
            }
            return product
        })
      }
      else{
        state.currentCart = [...state.currentCart,action.payload];
      }
    }, 
    clearCartData: (state) => {
      state.currentCart = [];
    },
  },
});

export const { setCartData, clearCartData } = cartSlice.actions;

export default cartSlice.reducer;