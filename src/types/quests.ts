export type Quest = {
    id: string;
    title: string;
    previewImg: string;
    previewImgWebp: string;
    level: string;
    type: string;
    peopleMinMax: [number,'-', number];
    description: string;
}

export type Quests = Quest[];
