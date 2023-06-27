import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../../state/popular/popular.thunk';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

const Tabs = () => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    const selectedLanguage = useSelector(
        (state) => state.popularReducer.selectedLanguage
    );
    const loading = useSelector((state) => state.popularReducer.loading);

    const handleTabClick = (language) => {
        dispatch(getRepos(language));
        setSearchParams({ language });
    };

    useEffect(() => {
        dispatch(getRepos(searchParams.get('language')));
    }, []);

    return (
        <ul className='languages'>
            {languages.map((language, index) => (
                <li
                    key={index}
                    style={{
                        color: language === selectedLanguage ? '#d0021b' : '#000',
                    }}
                    className={loading ? 'disable' : ''}
                    onClick={() => handleTabClick(language)}
                >
                    {language}
                </li>
            ))}
        </ul>
    );
};

export default Tabs;