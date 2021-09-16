import { GET_CHARACTERS } from './actionTypes';

export const getAllCharacters = () => {
  return async (dispatch) => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const result = await response.json();
    dispatch({
      type: GET_CHARACTERS,
      payload: result.results,
    });
  };
};
