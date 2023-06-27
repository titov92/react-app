import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserAction } from '../../state/battle/battle.action';

const Battle = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.battleReducer.users);

    return (
        <div>
            <div className='row'>
                {users.firstImage ? (
                    <PlayerPreview avatar={users.firstImage} userName={users.first}>
                        <button
                            className='reset'
                            onClick={() => dispatch(deleteUserAction('first'))}
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
                            onClick={() => dispatch(deleteUserAction('second'))}
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