import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getDifficultLevel = (state: Pick<State, NameSpace.Quests>): string =>
  state[NameSpace.Quests].difficultLevel;

export const getQuestType = (state: Pick<State, NameSpace.Quests>): string =>
  state[NameSpace.Quests].questType;

export const getQuestsIsLoading = (state: Pick<State, NameSpace.Quests>): boolean =>
  state[NameSpace.Quests].questsIsLoading;

export const getQuestsIsNotFound = (state: Pick<State, NameSpace.Quests>): boolean =>
  state[NameSpace.Quests].questsIsNotFound;
