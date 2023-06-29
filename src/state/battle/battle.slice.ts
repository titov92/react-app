import {
  ActionReducerMapBuilder,
  AnyAction,
  Slice,
  createSlice,
} from '@reduxjs/toolkit';
import { getRepos } from './battle.request';
import { IBattleState } from '../../types/battle.types';

const initialState: IBattleState = {
  users: { first: '', second: '', firstImage: null, secondImage: null },
  loading: false,
  winner: null,
  loser: null,
  error: null,
};

const battleSlice: Slice<IBattleState> = createSlice({
  name: 'battle',
  initialState,
  reducers: {
    setUsers: (state: IBattleState, action: AnyAction): void => {
      state.users = {
        ...state.users,
        [action.payload.id]: action.payload.userName,
        [`${action.payload.id}Image`]: `https://github.com/${action.payload.userName}.png?size200`,
      };
    },
    deleteUser: (state: IBattleState, action: AnyAction): void => {
      state.users = {
        ...state.users,
        [action.payload]: '',
        [`${action.payload}Image`]: null,
      };
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IBattleState>): void => {
    builder.addCase(getRepos.pending, (state: IBattleState): void => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(
      getRepos.fulfilled,
      (state: IBattleState, { payload }: AnyAction): void => {
        state.loading = false;
        state.winner = payload[0];
        state.loser = payload[1];
      }
    );

    builder.addCase(
      getRepos.rejected,
      (state: IBattleState, { payload }: AnyAction): void => {
        state.loading = false;
        state.error = payload;
      }
    );
  },
});

export const { setUsers, deleteUser } = battleSlice.actions;

export default battleSlice.reducer;
