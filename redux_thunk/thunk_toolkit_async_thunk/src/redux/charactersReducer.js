import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { getAllCharacters } from './actions';

const charactersReducer = createReducer([], {
  [getAllCharacters.fulfilled]: (_, { payload }) => payload,
});

const charactersLoadingReducer = createReducer(false, {
  [getAllCharacters.pending]: () => true,
  [getAllCharacters.fulfilled]: () => false,
  [getAllCharacters.rejected]: () => false,
});

const errorReducer = createReducer(null, {
  [getAllCharacters.pending]: () => null,
  [getAllCharacters.rejected]: () => 'Error! Что-то пошло не так!',
});

export default combineReducers({
  characters: charactersReducer,
  charactersLoading: charactersLoadingReducer,
  error: errorReducer,
});
