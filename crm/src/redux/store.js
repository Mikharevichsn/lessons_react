import { configureStore } from '@reduxjs/toolkit';
import { leadsReducer, userReducer } from './reducers';

const store = configureStore({
  reducer: {
    leads: leadsReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
