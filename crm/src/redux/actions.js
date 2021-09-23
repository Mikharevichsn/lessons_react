import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api';

export const addLead = createAction('ADD_LEAD');

export const login = createAsyncThunk('USER_LOGIN', async (loginData) => {
  const loginResult = await api.post({ url: '/auth', data: loginData });
  return loginResult;
});

export const logout = createAsyncThunk('USER_LOGOUT', async () => {
  const loginResult = await api.post({ url: '/logout' });
  return loginResult;
});
