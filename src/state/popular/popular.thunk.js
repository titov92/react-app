import { getReposRequest } from '../../api/requests';
import {
    getReposFailureAction,
    getReposLoadingAction,
    getReposSuccessAction,
    updateLanguageAction,
} from './popular.action';

export const getRepos = (selectedLanguage) => (dispatch) => {
    dispatch(updateLanguageAction(selectedLanguage));
    dispatch(getReposLoadingAction());

    getReposRequest(selectedLanguage)
        .then((data) => dispatch(getReposSuccessAction(data)))
        .catch((error) => dispatch(getReposFailureAction(error)));
};