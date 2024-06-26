import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/index';
import { Navigate } from 'react-router-dom';
import QuestCard from '../../components/quest-card/quest-card';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import FilterItem from '../../components/filter-section/filter-section';
import Spinner from '../../components/spinner/spinner';
import {
  getQuestType, getDifficultLevel,
  getQuestsIsLoading, getQuests, getQuestsIsNotFound
} from '../../store/quests-process/quests-process.selectors';
import { AppRoute, DIFFICULTY_LEVELS, QUEST_TYPES } from '../../const';


function MainPage(): JSX.Element {
  const quests = useAppSelector(getQuests);
  const questsCount = quests.length;
  const currentType = useAppSelector(getQuestType);
  const currentDifficulty = useAppSelector(getDifficultLevel);
  const questsIsLoading = useAppSelector(getQuestsIsLoading);
  const questsIsNotFound = useAppSelector(getQuestsIsNotFound);

  const isNotAllOrAny = (value: string) => value !== 'all' && value !== 'any';

  const filteredQuests = quests.filter((quest) => {

    const typeFilter = currentType === QUEST_TYPES['all-quests'] || currentType === quest.type || !isNotAllOrAny(currentType);
    const difficultyFilter = currentDifficulty === DIFFICULTY_LEVELS.any || currentDifficulty === quest.level || !isNotAllOrAny(currentDifficulty);

    return typeFilter && difficultyFilter;
  });

  return (
    <div className="wrapper">
      <Helmet>
        <title>Escape Room. Main.</title>
      </Helmet>
      <Header />
      <main className="page-content">
        {questsIsLoading && <Spinner />}
        {questsIsNotFound && <Navigate to={AppRoute.NotFound} />}
        {!questsIsLoading && (
          <div className="container">
            {questsCount ? (
              <>
                <div className="page-content__title-wrapper">
                  <h1 className="subtitle page-content__subtitle">
                    квесты в Санкт-Петербурге
                  </h1>
                  <h2 className="title title--size-m page-content__title">
                    Выберите тематику
                  </h2>
                </div>
                <div className="page-content__item">
                  <FilterItem />
                </div>
                <h2 className="title visually-hidden">Выберите квест</h2>
                <div className="cards-grid">
                  {filteredQuests.length === 0}
                  {filteredQuests.length !== 0 && filteredQuests.map((quest) => <QuestCard key={quest.id} questCard={quest} />)}
                </div>
              </>
            ) : (
              <h2>Нет доступных квестов</h2>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>

  );
}

export default MainPage;
