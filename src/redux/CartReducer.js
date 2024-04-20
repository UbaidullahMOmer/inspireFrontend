// CartReducer.js
import { createSlice } from "@reduxjs/toolkit";
import {  enqueueSnackbar } from 'notistack'
// Action creator to load cart items from browser storage
export const loadCartItems = () => {
  const storedItems = localStorage.getItem("cartItems");
  return storedItems ? JSON.parse(storedItems) : [];
};

// Action creator to save cart items to browser storage
const saveCartItems = (cartProducts) => {
  localStorage.setItem("cartItems", JSON.stringify(cartProducts));
};

export const slice = createSlice({
  name: "CartReducer",
  initialState: {
    cartProducts: loadCartItems(), // Load cart items from browser storage
  },
  reducers: {
    addItemToCart: (state, action) => {
      enqueueSnackbar('Item added to cart', { variant: 'success' })
      const newItem = action.payload;
      const existingItemIndex = state.cartProducts.findIndex(
        (item) => item.id === newItem.id
      );
      if (existingItemIndex !== -1) {
        state.cartProducts[existingItemIndex].qty += 1;
      } else {
        state.cartProducts.push(newItem);
      }
      // Save cart items to browser storage
      saveCartItems(state.cartProducts);
    },
    removeItemFromCart: (state, action) => {
      enqueueSnackbar('Item removed from cart', { variant: 'success' })
      const indexToRemove = state.cartProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexToRemove !== -1) {
        state.cartProducts.splice(indexToRemove, 1);
      }
      // Save cart items to browser storage
      saveCartItems(state.cartProducts);
    },
    updateItemQuantity: (state, action) => {
      enqueueSnackbar('Item quantity updated', { variant: 'success' })
      const { id, qty } = action.payload;
      const item = state.cartProducts.find((item) => item.id === id);
      if (item) {
        item.qty = qty;
      }
      // Save cart items to browser storage
      saveCartItems(state.cartProducts);
    },
    clearCart: (state) => {
      enqueueSnackbar('Cart cleared', { variant: 'success' })
      state.cartProducts = [];
      // Clear cart items from browser storage
      localStorage.removeItem("cartItems");
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  clearCart,
} = slice.actions;

export const cartItemsSelector = (state) => state.cart.cartProducts;

export default slice.reducer;
