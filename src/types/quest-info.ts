import { Quest } from './quest';

export type QuestInfo = {
    id: string;
    title: string;
    previewImg: string;
    previewImgWebp: string;
    level: string;
    type: string;
    peopleMinMax: number[];
    quest: Quest;
}

export type QuestsInfo = QuestInfo[];
