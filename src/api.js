import axios from "axios";

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