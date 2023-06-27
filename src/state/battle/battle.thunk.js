import { makeBattle } from '../../api/requests';
import {
    getReposLoadingAction,
    getReposFailureAction,
    setWinnerAction,
    setLoserAction,
} from './battle.action';

export const getRepos =
    ({ playerOneName, playerTwoName }) =>
        (dispatch) => {
            dispatch(getReposLoadingAction());

            makeBattle([playerOneName, playerTwoName])
                .then(([winner, loser]) => {
                    dispatch(setWinnerAction(winner));
                    dispatch(setLoserAction(loser));
                })
                .catch((error) => dispatch(getReposFailureAction(error)));
        };