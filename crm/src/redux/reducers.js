import { createReducer } from '@reduxjs/toolkit';
import { addLead } from './actions';

export const leadsReducer = createReducer([], {
  [addLead]: (state, { payload }) => [...state, payload],
});
