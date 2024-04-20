// store.js
import { configureStore } from "@reduxjs/toolkit";
import CartReducer, { loadCartItems } from "./CartReducer";

// Load cart items from browser storage
const preloadedState = {
  cart: {
    cartProducts: loadCartItems() || [],
  },
};

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
  preloadedState,
});
