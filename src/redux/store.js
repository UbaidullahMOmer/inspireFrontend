// store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { inspireApis } from './InspireApis';
import { setupListeners } from '@reduxjs/toolkit/query';

// Import your reducers
import CartReducer, { loadCartItems } from "./CartReducer";

// Load cart items from browser storage
const preloadedState = {
  cart: {
    cartProducts: loadCartItems() || [],
  },
};

// Combine reducers
const rootReducer = combineReducers({
  cart: CartReducer,
  [inspireApis.reducerPath]: inspireApis.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(inspireApis.middleware),
  preloadedState,
});

setupListeners(store.dispatch);
