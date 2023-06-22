const Tabs = ({ languages, selectedLanguage, onTabClick, loading }) => {
    return (
        <ul className='languages'>
            {languages.map((language, index) => (
                <li
                    key={index}
                    style={{
                        color: language === selectedLanguage ? '#d0021b' : '#000',
                    }}
                    className={loading ? 'disable' : ''}
                    onClick={() => onTabClick(language)}
                >
                    {language}
                </li>
            ))}
        </ul>
    );
};

export default Tabs;