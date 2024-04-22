import { QuestsInfo } from '../types/quest-info';

export const quests: QuestsInfo = [
  {
    id: '1',
    title: 'Склеп',
    previewImg: 'img/content/frontier/frontier-size-s.jpg',
    previewImgWebp: 'img/content/frontier/frontier-size-s@2x.webp',
    level: 'сложный',
    type: 'приключения',
    peopleMinMax: [2, 5],
    quest: {
      description: 'string',
      coverImg: 'img/content/frontier/frontier-size-s.jpg',
      coverImgWebp: 'img/content/frontier/frontier-size-s@2x.webp',
    },
  },
  {
    id: '2',
    title: 'Маньяк',
    previewImg: 'img/content/crypt/crypt-size-s.jpg',
    previewImgWebp: 'img/content/crypt/crypt-size-s@2x.webp',
    level: 'средний',
    type: 'ужасы',
    peopleMinMax: [3, 6],
    quest: {
      description: 'string',
      coverImg: 'img/content/crypt/crypt-size-s.jpg',
      coverImgWebp: 'img/content/crypt/crypt-size-s@2x.webp',
    },
  },
  {
    id: '3',
    title: 'Ритуал',
    previewImg: 'img/content/experiment/experiment-size-s.jpg',
    previewImgWebp: 'img/content/experiment/experiment-size-s@2x.webp',
    level: 'легкий',
    type: 'детектив',
    peopleMinMax: [2, 5],
    quest: {
      description: 'string',
      coverImg: 'img/content/experiment/experiment-size-s.jpg',
      coverImgWebp: 'img/content/experiment/experiment-size-s@2x.webp',
    },
  },
  {
    id: '4',
    title: 'История призраков',
    previewImg: 'img/content/ghosts/ghosts-size-s.jpg',
    previewImgWebp: 'img/content/ghosts/ghosts-size-s@2x.webp',
    level: 'легкий',
    type: 'мистика',
    peopleMinMax: [2, 3],
    quest: {
      description: 'string',
      coverImg: 'img/content/ghosts/ghosts-size-s.jpg',
      coverImgWebp: 'img/content/ghosts/ghosts-size-s@2x.webp',
    },
  },
  {
    id: '5',
    title: 'Тайны старого особняка',
    previewImg: 'img/content/hut/hut-size-s.jpg',
    previewImgWebp: 'img/content/hut/hut-size-s@2x.webp',
    level: 'легкий',
    type: 'детектив',
    peopleMinMax: [4, 6],
    quest: {
      description: 'string',
      coverImg: 'img/content/hut/hut-size-s.jpg',
      coverImgWebp: 'img/content/hut/hut-size-s@2x.webp',
    },
  },
];
