import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Player from './Player';
import Loader from '../../components/Loader';
import { getRepos } from '../../state/battle/battle.request';

const Results = () => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const playerOneName = searchParams.get('playerOneName');
    const playerTwoName = searchParams.get('playerTwoName');

    const loading = useSelector((state) => state.battle.loading);
    const error = useSelector((state) => state.battle.error);
    const winner = useSelector((state) => state.battle.winner);
    const loser = useSelector((state) => state.battle.loser);

    useEffect(() => {
        dispatch(getRepos({ playerOneName, playerTwoName }));
    }, []);

    if (loading) return <Loader />;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            {winner && loser ? (
                <div className='row'>
                    <Player
                        label='Winner'
                        score={winner.score}
                        profile={winner.profile}
                    />
                    <Player label='Loser' score={loser.score} profile={loser.profile} />
                </div>
            ) : null}
        </>
    );
};

export default Results;