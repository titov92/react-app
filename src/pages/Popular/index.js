import Tabs from '../../components/navigation/Tabs'
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader';


const RepList  = () => {
    const repos = useSelector((state) => state.popularReducer.repos);

    return (
        <ul className='popular-list'>
            {repos.map((repo, index) => {
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

const Repository = () => {
    const loading = useSelector((state) => state.popularReducer.loading);
    const error = useSelector((state) => state.popularReducer.error);

    if (error) return <p>Error: {error}</p>;

    const renderRepos = () => {
        return loading ? <Loader /> : <RepList />;
    };

    return <>{renderRepos()}</>;
};
const Popular = () => (
    <>
        <Tabs />
        <Repository />
    </>
);

export default Popular;