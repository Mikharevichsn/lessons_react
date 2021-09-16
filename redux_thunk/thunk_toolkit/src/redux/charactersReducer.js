import { createReducer } from '@reduxjs/toolkit';
import { getAllCharacters } from './actions';

export const charactersReducer = createReducer([2, 2, 2], {
  [getAllCharacters]: (_, { payload }) => payload,
});
