import axios, { AxiosResponse } from 'axios';

const handleError = (error: any): void => {
    throw new Error(error);
};

const getProfile = (userName: string): Promise<any> => {
    return axios
        .get(`https://api.github.com/users/${userName}`)
        .then((user: AxiosResponse<any, any>): any => user.data)
        .catch(handleError);
};

const getRepos = (userName: string): Promise<any> => {
    return axios
        .get(`https://api.github.com/users/${userName}/repos`)
        .then((user: AxiosResponse<any, any>): any => user.data)
        .catch(handleError);
};

const getStartCount = (repos: any): number => {
    return repos.reduce(
        (acc: number, repo: any): number => acc + repo.stargazers_count,
        0
    );
};

const calculateScore = (profile: any, repos: any): number => {
    const followers: number = profile.followers;
    const totalStars: any = getStartCount(repos);

    return followers + totalStars;
};

const getUserData = (userName: string): any => {
    return Promise.all([getProfile(userName), getRepos(userName)]).then(
        ([profile, repos]: any): { profile: any; score: number } => {
            return {
                profile,
                score: calculateScore(profile, repos),
            };
        }
    );
};

const sortPlayers = (players: any): any => {
    return players.sort((a: any, b: any): number => b.score - a.score);
};

export const makeBattle = (players: Array<string>): Promise<any> => {
    return Promise.all(players.map(getUserData))
        .then(sortPlayers)
        .catch(handleError);
};

export const getReposRequest = (language: string): Promise<any> => {
    return axios
        .get(
            window.encodeURI(
                `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=desc&type=Repositories`
            )
        )
        .then((res: AxiosResponse<any, any>) => res.data.items)
        .catch((err: any): void => {
            throw new Error(err);
        });
};