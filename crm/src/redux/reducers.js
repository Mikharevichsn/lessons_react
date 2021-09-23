import { createReducer } from '@reduxjs/toolkit';
import { addLead, login, logout } from './actions';
import { initLeads } from './initStoreData';

export const leadsReducer = createReducer(initLeads, {
  [addLead]: (state, { payload }) => [...state, payload],
});

export const userReducer = createReducer(null, {
  [login.fulfilled]: (_, { payload }) => payload,
  [logout.fulfilled]: () => null,
});
