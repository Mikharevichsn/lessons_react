import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducer';

const initialStore = {
  tasks: [],
  user: null,
  error: null,
};

export const store = createStore(reducer, initialStore, composeWithDevTools());
