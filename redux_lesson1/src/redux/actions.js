import { v4 as uuid } from 'uuid';
import { ADD_TASK, DELETE_TASK, LOGIN, LOGOUT } from './actionTypes';

export const addTask = (titleText) => {
  const task = {
    id: uuid(),
    title: titleText,
    isDone: false,
  };

  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
  payload: null,
});
