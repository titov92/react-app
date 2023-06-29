import {
  ActionReducerMapBuilder,
  AnyAction,
  Slice,
  createSlice,
} from '@reduxjs/toolkit';
import { getRepos } from './popular.request';
import { IPopularState } from '../../types/popular.types';

const initialState: IPopularState = {
  selectedLanguage: 'All',
  loading: false,
  repos: [],
  error: null,
};

const popularSlice: Slice<IPopularState> = createSlice({
  name: 'popular',
  initialState,
  reducers: {
    updateLanguage: (state: IPopularState, action: AnyAction): void => {
      state.selectedLanguage = action.payload;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IPopularState>): void => {
    builder.addCase(getRepos.pending, (state: IPopularState): void => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(
      getRepos.fulfilled,
      (state: IPopularState, { payload }: AnyAction): void => {
        state.loading = false;
        state.repos = payload;
      }
    );

    builder.addCase(
      getRepos.rejected,
      (state: IPopularState, { payload }: AnyAction): void => {
        state.loading = false;
        state.error = payload;
      }
    );
  },
});

export const { updateLanguage } = popularSlice.actions;

export default popularSlice.reducer;
