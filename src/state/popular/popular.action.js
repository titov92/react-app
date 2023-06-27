import { POPULAR } from './popular.constants';

export const updateLanguageAction = (payload) => ({
    type: POPULAR.SET_SELECTED_LANGUAGE,
    payload,
});

export const getReposLoadingAction = () => ({
    type: POPULAR.GET_REPOS_LOADING,
});

export const getReposSuccessAction = (payload) => ({
    type: POPULAR.GET_REPOS_SECCESS,
    payload,
});

export const getReposFailureAction = (payload) => ({
    type: POPULAR.GET_REPOS_FAILURE,
    payload,
});