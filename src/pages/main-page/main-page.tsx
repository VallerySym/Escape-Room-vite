import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/index';
import QuestCard from '../../components/quest-card/quest-card';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import FilterItem from '../../components/filter-section/filter-section';
import Spinner from '../../components/spinner/spinner';
import { getQuestType, getDifficultLevel, getQuestsIsLoading } from '../../store/quests-process/quests-process.selectors';

function MainPage(): JSX.Element {
  const quests = useAppSelector((state) => state.QUESTS.questsData);
  const currentTheme = useAppSelector(getQuestType);
  const currentDifficulty = useAppSelector(getDifficultLevel);
  const isLoading = useAppSelector(getQuestsIsLoading);

  const isNotAllOrAny = (value: string) => value !== 'all' && value !== 'any';

  const filteredQuests = quests.filter((quest) => {

    const themeFilter = currentTheme === 'all' || currentTheme === quest.type || !isNotAllOrAny(currentTheme);
    const difficultyFilter = currentDifficulty === 'any' || currentDifficulty === quest.level || !isNotAllOrAny(currentDifficulty);

    return themeFilter && difficultyFilter;
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="wrapper">
      <Helmet>
        <title>Escape Room. Main.</title>
      </Helmet>
      <Header />
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">
              квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">
              Выберите тематику
            </h2>
          </div>
          <div className="page-content__item">
            <form className="filter" action="#" method="get">
              <FilterItem />
            </form>
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <div className="cards-grid">
            {filteredQuests.length === 0}
            {filteredQuests.length !== 0 && filteredQuests.map((quest) => <QuestCard key={quest.id} questCard={quest} />)}
          </div>
        </div>
      </main>
      <Footer />
    </div>

  );
}

export default MainPage;
