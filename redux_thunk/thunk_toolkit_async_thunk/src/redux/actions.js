import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllCharacters = createAsyncThunk(
  'GET_ALL_CHARACTERS',
  async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const result = await response.json();
    return result.results;
  }
);
