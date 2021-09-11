import { createReducer } from '@reduxjs/toolkit';
import { removeFromCatalog } from './actions';
import catalogItems from './catalogItems';

export const catalogItemsReducer = createReducer(catalogItems, {
  [removeFromCatalog]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
  // decrement: (state, action) => state - action.payload
});
