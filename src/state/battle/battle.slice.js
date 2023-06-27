import { createSlice } from '@reduxjs/toolkit';
import { getRepos } from './battle.request';

const initialState = {
    users: { first: '', second: '', firstImage: null, secondImage: null },
    loading: false,
    winner: null,
    loser: null,
    error: null,
};

const battleSlice = createSlice({
    name: 'battle',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = {
                ...state.users,
                [action.payload.id]: action.payload.userName,
                [`${action.payload.id}Image`]: `https://github.com/${action.payload.userName}.png?size200`,
            };
        },
        deleteUser: (state, action) => {
            state.users = {
                ...state.users,
                [action.payload]: '',
                [`${action.payload}Image`]: null,
            };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getRepos.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(getRepos.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.winner = payload[0];
            state.loser = payload[1];
        });

        builder.addCase(getRepos.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });
    },
});

export const { setUsers, deleteUser } = battleSlice.actions;

export default battleSlice.reducer;