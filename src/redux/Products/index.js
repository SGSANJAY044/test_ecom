import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentProducts: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsData: (state, action) => {
      state.currentProducts= action.payload
    },
    clearProductsData: (state) => {
      state.currentProducts = null;
    },
  },
});

export const { setProductsData, clearProductsData } = productsSlice.actions;

export default productsSlice.reducer;