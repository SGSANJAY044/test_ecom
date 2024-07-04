import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentProducts: {
    data: [],
    totalcount: 0
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsData: (state, action) => {
      state.currentProducts = { ...state.currentProducts, data: action.payload }
    },
    setTotalCount: (state, action) => {
      state.currentProducts = { ...state.currentProducts, totalcount: action.payload }
    },
    clearProductsData: (state) => {
      state.currentProducts = null;
    },
  },
});

export const { setProductsData, clearProductsData, setTotalCount } = productsSlice.actions;

export default productsSlice.reducer; 