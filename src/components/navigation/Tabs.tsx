import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../../state/popular/popular.request';
import { useEffect, FC, ReactElement } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../../state/store';

const languages: string[] = [
  'All',
  'JavaScript',
  'Ruby',
  'Java',
  'CSS',
  'Python',
];

const Tabs: FC = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams, setSearchParams] = useSearchParams() as any;

  const selectedLanguage: string = useSelector(
    (state: RootState): string => state.popular.selectedLanguage
  );
  const loading: boolean = useSelector(
    (state: RootState): boolean => state.popular.loading
  );

  const handleTabClick = (language: string): void => {
    dispatch(getRepos(language));
    setSearchParams({ language });
  };

  useEffect((): void => {
    dispatch(getRepos(searchParams.get('language')));
  }, []);

  return (
    <ul className='languages'>
      {languages.map(
        (language: string, index: number): ReactElement => (
          <li
            key={index}
            style={{
              color: language === selectedLanguage ? '#d0021b' : '#000',
            }}
            className={loading ? 'disable' : ''}
            onClick={(): void => handleTabClick(language)}
          >
            {language}
          </li>
        )
      )}
    </ul>
  );
};

export default Tabs;
