import { configureStore } from '@reduxjs/toolkit';
import { charactersReducer } from './charactersReducer';

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
