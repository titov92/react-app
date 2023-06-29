import { createAsyncThunk } from '@reduxjs/toolkit';
import { makeBattle } from '../../api/requests';
import { IBattleRepos } from '../../types/battle.types';

export const getRepos = createAsyncThunk(
  'battle/getRepos',
  async (
    { playerOneName, playerTwoName }: IBattleRepos,
    { rejectWithValue, dispatch }
  ): Promise<any> => {
    try {
      return await makeBattle([playerOneName, playerTwoName]);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
