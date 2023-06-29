export interface IRepos {
  [key: string]: any;
}

export type TRepos = [] | IRepos[];
export type TError = null | string;

export interface IPopularState {
  selectedLanguage: string;
  loading: boolean;
  repos: TRepos;
  error: TError;
}
