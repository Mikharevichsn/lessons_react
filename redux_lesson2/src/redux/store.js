import { configureStore } from '@reduxjs/toolkit';
import { catalogItemsReducer } from './catalogItemsReducer';
import { cartReducer } from './cartReducer';

export const store = configureStore({
  reducer: {
    catalogItems: catalogItemsReducer,
    cart: cartReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
