import axios from 'axios';

const handleError = (error) => {
    throw new Error(error);
};

const getProfile = (userName) => {
    return axios
        .get(`https://api.github.com/users/${userName}`)
        .then((user) => user.data)
        .catch(handleError);
};

const getRepos = (userName) => {
    return axios
        .get(`https://api.github.com/users/${userName}/repos`)
        .then((user) => user.data)
        .catch(handleError);
};

const getStartCount = (repos) => {
    return repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
};

const calculateScore = (profile, repos) => {
    const followers = profile.followers;
    const totalStars = getStartCount(repos);

    return followers + totalStars;
};

const getUserData = (userName) => {
    return Promise.all([getProfile(userName), getRepos(userName)]).then(
        ([profile, repos]) => {
            return {
                profile,
                score: calculateScore(profile, repos),
            };
        }
    );
};

const sortPlayers = (players) => {
    return players.sort((a, b) => b.score - a.score);
};

export const makeBattle = (players) => {
    return Promise.all(players.map(getUserData))
        .then(sortPlayers)
        .catch(handleError);
};

export const fetchPopularRepos = (language) => {
    return axios
        .get(
            window.encodeURI(
                `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=desc&type=Repositories`
            )
        )
        .then((res) => res.data.items)
        .catch((err) => {
            throw new Error(err);
        });
};