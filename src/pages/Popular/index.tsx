import Tabs from '../../components/navigation/Tabs';
import { FC, ReactElement } from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../state/store";
import {IRepos, TError, TRepos} from "../../types/popular.types";
import Loader from "../../components/Loader";




const Repository: FC = (): ReactElement => {
    const loading: boolean = useSelector(
        (state: RootState): boolean => state.popular.loading
    );
    const error: TError = useSelector(
        (state: RootState): TError => state.popular.error
    );

    if (error) return <p>Error: {error}</p>;

    const renderRepos = () => {
        return loading ? <Loader /> : <Replist />;
    };

    return <>{renderRepos()}</>;
};


const Replist: FC = (): ReactElement => {
    const repos: TRepos = useSelector(
        (state: RootState): TRepos => state.popular.repos
    );

    return (
        <ul className='popular-list'>
            {repos.map((repo: IRepos, index: number): ReactElement => {
                return (
                    <li key={repo.id} className='popular-item'>
                        <div className='popular-rank'>#{index + 1}</div>
                        <ul className='space-list-items'>
                            <li>
                                <img
                                    className='avatar'
                                    src={repo.owner.avatar_url}
                                    alt='Avatar'
                                />
                            </li>
                            <li>
                                <a href={repo.html_url} target='_blank'>
                                    {repo.name}
                                </a>
                            </li>
                            <li>@{repo.owner.login}</li>
                            <li>{repo.stargazers_count}</li>
                        </ul>
                    </li>
                );
            })}
        </ul>
    );
};
const Popular: FC = (): ReactElement => (
  <>
    <Tabs />
    <Repository />
  </>
);

export default Popular;
