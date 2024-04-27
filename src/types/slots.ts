import { QuestTime } from './quest-time';

export type Slot = {
  today: QuestTime[];
  tomorrow: QuestTime[];
}

export type Slots = {
    today: Slot[];
    tomorrow: Slot[];
  };
