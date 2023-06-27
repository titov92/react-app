import { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUsersAction } from '../../state/battle/battle.action';

const PlayerInput = memo(({ id, label }) => {
    const dispatch = useDispatch();

    const [userName, setUserName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setUsersAction({ id, userName }));
    };

    return (
        <form className='column' onSubmit={handleSubmit}>
            <label className='header' htmlFor={label}>
                Player {label}
            </label>
            <input
                id={label}
                type='text'
                placeholder='GitHub Username'
                autoComplete='off'
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
            />

            <button className='button' type='submit' disabled={!userName.length}>
                Submit
            </button>
        </form>
    );
});

export default PlayerInput;