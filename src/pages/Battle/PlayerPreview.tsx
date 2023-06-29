import { memo, ReactElement, FC, ReactNode } from 'react';

interface IProps {
  avatar: string;
  userName: string;
  children: ReactNode;
}

const PlayerPreview: FC<IProps> = memo(
  ({ avatar, userName, children }): ReactElement => {
    return (
      <div>
        <div className='column'>
          <img src={avatar} alt='Avatar' className='avatar' />
          <h3>{userName}</h3>
        </div>
        {children}
      </div>
    );
  }
);

export default PlayerPreview;
