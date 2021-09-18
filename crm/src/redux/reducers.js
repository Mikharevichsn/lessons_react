import { createReducer } from '@reduxjs/toolkit';
import { addLead } from './actions';
import { initLeads } from './initStoreData';

export const leadsReducer = createReducer(initLeads, {
  [addLead]: (state, { payload }) => [...state, payload],
});
