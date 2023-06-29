import {
  memo,
  useState,
  ChangeEvent,
  FormEvent,
  FC,
  ReactElement,
} from 'react';
import { useDispatch } from 'react-redux';
import { setUsers } from '../../state/battle/battle.slice';
import { AppDispatch } from '../../state/store';

interface IProps {
  id: string;
  label: number;
}

const PlayerInput: FC<IProps> = memo(({ id, label }): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();

  const [userName, setUserName] = useState<string>('');

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    dispatch(setUsers({ id, userName }));
  };

  return (
    <form className='column' onSubmit={handleSubmit}>
      <label className='header' htmlFor={String(label)}>
        Player {label}
      </label>
      <input
        id={String(label)}
        type='text'
        placeholder='GitHub Username'
        autoComplete='off'
        value={userName}
        onChange={(event: ChangeEvent<HTMLInputElement>): void =>
          setUserName(event.target.value)
        }
      />

      <button className='button' type='submit' disabled={!userName.length}>
        Submit
      </button>
    </form>
  );
});

export default PlayerInput;
