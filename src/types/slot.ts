export type QuestTime = {
  time: string;
  isAvailable: boolean;
}

export type Slot = {
  today: QuestTime[];
  tomorrow: QuestTime[];
}

