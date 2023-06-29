import { memo, FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import PlayerPreview from './PlayerPreview';

interface IProps {
  label: string;
  score: number;
  profile: any;
}

const Player: FC<IProps> = memo(({ label, score, profile }): ReactElement => {
  return (
    <div>
      <h1 className='header'>{label}</h1>
      <h3 style={{ textAlign: 'center' }}>Score: {score}</h3>
      <PlayerPreview avatar={profile.avatar_url} userName={profile.login}>
        <ul className='space-list-items'>
          {profile.name ? <li>{profile.name}</li> : null}
          {profile.location ? <li>{profile.location}</li> : null}
          {profile.company ? <li>{profile.company}</li> : null}
          <li>Followers: {profile.followers}</li>
          <li>Following: {profile.following}</li>
          <li>Public Repos: {profile.public_repos}</li>
          {profile.blog ? (
            <li>
              <Link to={profile.blog} target='_blank'>
                {profile.blog}
              </Link>
            </li>
          ) : null}
        </ul>
      </PlayerPreview>
    </div>
  );
});

export default Player;
