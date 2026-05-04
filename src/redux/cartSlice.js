import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
    },

    addToCart: (state, action) => {
      console.log("REDUX HIT:", action.payload);

      const item = action.payload;

      if (!item || !item.id) return;

      const existing = state.cartItems.find((i) => i.id === item.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );
    },

    increaseQty: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },

    decreaseQty: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
