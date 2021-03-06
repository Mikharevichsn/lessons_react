import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducer';

const initialStore = {
  characters: [1],
};

export const store = createStore(
  reducer,
  initialStore,
  composeWithDevTools(applyMiddleware(thunk))
);
