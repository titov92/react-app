import React, { useState, useEffect } from "react";
import { fetchPopularRepos } from '../../api/requests';
import Tabs from '../../components/navigation/Tabs';
import Loader from '../../components/Loader';

import { useSearchParams } from "react-router-dom";

const Popular = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedLanguage = searchParams.get("language") || "All";
    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState(null);

    const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

    const handleTabClick = (language) => {
        setSearchParams({ language });
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await fetchPopularRepos(selectedLanguage);
                setRepos(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [selectedLanguage]);



    const RepList = ({ repos }) => {
        return (
            <ul className="popular-list">
                {repos.map((item, index) => {
                    return (
                        <li key={item.id} className="popular-item">
                            <div className="popular-rank">#{index + 1}</div>
                            <ul className="space-list-items">
                                <li>
                                    <img
                                        className="avatar"
                                        src={item.owner.avatar_url}
                                        alt="Avatar"
                                    />
                                </li>
                                <li>
                                    <a href={item.html_url}>{item.name}</a>
                                </li>
                                <li>@{item.owner.login}</li>
                                <li>{item.stargazers_count}</li>
                            </ul>
                        </li>
                    );
                })}
            </ul>
        );
    };

    const renderList = () => {
        return loading ? <Loader /> : <RepList repos={repos} />;
    };

    return (
        <>
            <Tabs
                languages={languages}
                selectedLanguage={selectedLanguage}
                onTabClick={handleTabClick}
                loading={loading}
            />
            {renderList()}
        </>
    );
};

export default Popular;