type TBattleImage = null | string;

export type TError = null | string;

export type TUsers = {
  first: string;
  second: string;
  firstImage: TBattleImage;
  secondImage: TBattleImage;
};

export type TPlayerResult = {
  profile: any;
  score: number;
} | null;

export interface IBattleState {
  users: TUsers;
  loading: boolean;
  winner: TPlayerResult;
  loser: TPlayerResult;
  error: TError;
}

export interface IBattleRepos {
  playerOneName: string;
  playerTwoName: string;
}
