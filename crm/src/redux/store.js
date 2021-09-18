import { configureStore } from '@reduxjs/toolkit';
import { leadsReducer } from './reducers';

const store = configureStore({
  reducer: {
    leads: leadsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
