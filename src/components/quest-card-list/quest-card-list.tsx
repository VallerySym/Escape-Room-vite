import { Quests } from '../../types/quest-info';
import QuestCard from '../quest-card/quest-card';

type QuestCardListProps = {
    questList: Quests;
}

function QuestCardList({questList}: QuestCardListProps): JSX.Element {
  return (
    <div className="cards-grid">
      {questList.map((quest) => {
        const keyValue = quest.id;
        return (
          <QuestCard key={keyValue} questCard={quest}/>
        );
      })}
    </div>
  );
}

export default QuestCardList;
