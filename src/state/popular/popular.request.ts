import { createAsyncThunk } from '@reduxjs/toolkit';
import { getReposRequest } from '../../api/requests';
import { updateLanguage } from './popular.slice';

export const getRepos = createAsyncThunk(
  'popular/getRepos',
  async (
    selectedLanguage: string,
    { rejectWithValue, dispatch }
  ): Promise<any> => {
    dispatch(updateLanguage(selectedLanguage));

    try {
      return await getReposRequest(selectedLanguage);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
