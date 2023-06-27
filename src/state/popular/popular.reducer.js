import { POPULAR } from './popular.constants';

const initialStore = {
    selectedLanguage: 'All',
    loading: false,
    repos: [],
    error: null,
};

export const popularReducer = (state = initialStore, action) => {
    switch (action.type) {
        case POPULAR.SET_SELECTED_LANGUAGE:
            return {
                ...state,
                selectedLanguage: action.payload,
            };
        case POPULAR.GET_REPOS_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case POPULAR.GET_REPOS_SECCESS:
            return {
                ...state,
                loading: false,
                repos: action.payload,
            };
        case POPULAR.GET_REPOS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};