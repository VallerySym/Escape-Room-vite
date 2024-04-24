import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getQuestIsLoading = (state: Pick<State, NameSpace.Quest>): boolean =>
  state[NameSpace.Quest].questIsLoading;

export const getQuestIsNotFound = (state: Pick<State, NameSpace.Quest>): boolean =>
  state[NameSpace.Quest].questIsNotFound;
