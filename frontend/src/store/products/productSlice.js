import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    updateStock: (state, action) => {
      const product = state.items.find(item => item.id === action.payload.id);
      if (product) {
        product.stock = action.payload.stock;
      }
    }
  }
});

export const { setProducts, updateStock } = productSlice.actions;
export default productSlice.reducer;
