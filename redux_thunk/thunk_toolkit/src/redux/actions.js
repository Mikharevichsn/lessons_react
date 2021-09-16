import { createAction } from '@reduxjs/toolkit';

export const fetchCharacters = () => async (dispatch) => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const result = await response.json();
  dispatch(getAllCharacters(result.results));
};

export const getAllCharacters = createAction('GET_ALL_CHARACTERS');
