import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const products = await axios.get(`https://fakestoreapi.com/products`);
    return products.data;
  }
);

export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async (id) => {
    const product = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return product.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    products: [],
    error: false,
  },
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    [fetchSingleProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSingleProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [fetchSingleProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default productSlice.reducer;
