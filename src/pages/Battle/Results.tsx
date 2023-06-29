import { useEffect, FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Player from './Player';
import Loader from '../../components/Loader';
import { getRepos } from '../../state/battle/battle.request';
import { AppDispatch, RootState } from '../../state/store';
import { TError, TPlayerResult } from '../../types/battle.types';

const Results: FC = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams, setSearchParams] = useSearchParams();

  const playerOneName: string = searchParams.get('playerOneName') as string;
  const playerTwoName: string = searchParams.get('playerTwoName') as string;

  const loading: boolean = useSelector(
    (state: RootState): boolean => state.battle.loading
  );
  const error: TError = useSelector(
    (state: RootState): TError => state.battle.error
  );
  const winner: TPlayerResult = useSelector(
    (state: RootState): TPlayerResult => state.battle.winner
  );
  const loser: TPlayerResult = useSelector(
    (state: RootState): TPlayerResult => state.battle.loser
  );

  useEffect((): void => {
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
