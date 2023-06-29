import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../state/battle/battle.slice';
import { FC, ReactElement } from 'react';
import { AppDispatch, RootState } from '../../state/store';
import { TUsers } from '../../types/battle.types';

const Battle: FC = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const users: TUsers = useSelector(
    (state: RootState): TUsers => state.battle.users
  );

  return (
    <div>
      <div className='row'>
        {users.firstImage ? (
          <PlayerPreview avatar={users.firstImage} userName={users.first}>
            <button
              className='reset'
              onClick={() => dispatch(deleteUser('first'))}
            >
              Reset
            </button>
          </PlayerPreview>
        ) : (
          <PlayerInput id='first' label={1} />
        )}
        {users.secondImage ? (
          <PlayerPreview avatar={users.secondImage} userName={users.second}>
            <button
              className='reset'
              onClick={() => dispatch(deleteUser('second'))}
            >
              Reset
            </button>
          </PlayerPreview>
        ) : (
          <PlayerInput id='second' label={2} />
        )}
      </div>
      {users.firstImage && users.secondImage ? (
        <Link
          to={{
            pathname: 'results',
            search: `?playerOneName=${users.first}&playerTwoName=${users.second}`,
          }}
          className='button'
        >
          Battle
        </Link>
      ) : null}
    </div>
  );
};

export default Battle;
