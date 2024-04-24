import { NameSpace } from '../../const';
import { Quest } from '../../types/quest';
import { State } from '../../types/state';

export const getQuest = (state: Pick<State, NameSpace.Quest>): Quest | null =>
  state[NameSpace.Quest].questData;

export const getQuestIsLoading = (state: Pick<State, NameSpace.Quest>): boolean =>
  state[NameSpace.Quest].questIsLoading;

export const getQuestIsNotFound = (state: Pick<State, NameSpace.Quest>): boolean =>
  state[NameSpace.Quest].questIsNotFound;
