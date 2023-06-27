import { BATTLE } from './battle.constants';

const initialStore = {
    users: { first: '', second: '', firstImage: null, secondImage: null },
    loading: false,
    winner: null,
    loser: null,
    error: null,
};

export const battleReducer = (state = initialStore, action) => {
    switch (action.type) {
        case BATTLE.SET_SELECTED_USERS:
            return {
                ...state,
                users: {
                    ...state.users,
                    [action.payload.id]: action.payload.userName,
                    [`${action.payload.id}Image`]: `https://github.com/${action.payload.userName}.png?size200`,
                },
            };
        case BATTLE.DELETE_SELECTED_USERS:
            return {
                ...state,
                users: {
                    ...state.users,
                    [action.payload]: '',
                    [`${action.payload}Image`]: null,
                },
            };
        case BATTLE.GET_REPOS_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case BATTLE.GET_REPOS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case BATTLE.SET_SELECTED_WINNER:
            return {
                ...state,
                winner: action.payload,
                loading: false,
            };
        case BATTLE.SET_SELECTED_LOSER:
            return {
                ...state,
                loser: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};