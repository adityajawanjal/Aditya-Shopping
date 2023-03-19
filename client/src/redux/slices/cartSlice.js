import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    qty: 1,
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    add: (state, action) => {
      state.qty += 1;
    },
    remove: (state, action) => {
      state.qty -= 1;
    },
  },
});

export const { addToCart, add, remove } = cartSlice.actions;
export default cartSlice.reducer;
