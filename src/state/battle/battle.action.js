import { BATTLE } from './battle.constants';

export const setUsersAction = (payload) => ({
    type: BATTLE.SET_SELECTED_USERS,
    payload,
});

export const deleteUserAction = (payload) => ({
    type: BATTLE.DELETE_SELECTED_USERS,
    payload,
});

export const getReposLoadingAction = () => ({
    type: BATTLE.GET_REPOS_LOADING,
});

export const getReposFailureAction = (payload) => ({
    type: BATTLE.GET_REPOS_FAILURE,
    payload,
});

export const setWinnerAction = (payload) => ({
    type: BATTLE.SET_SELECTED_WINNER,
    payload,
});

export const setLoserAction = (payload) => ({
    type: BATTLE.SET_SELECTED_LOSER,
    payload,
});