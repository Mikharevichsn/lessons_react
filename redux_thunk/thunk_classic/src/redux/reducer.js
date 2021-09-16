import { GET_CHARACTERS } from './actionTypes';

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };

    default:
      return state;
  }
};
