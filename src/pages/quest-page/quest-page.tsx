import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute } from '../../const';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { fetchQuestById } from '../../store/api-actions';
import Spinner from '../../components/spinner/spinner';
import { getQuestIsLoading, getQuest } from '../../store/quest-process/quest-process.selectors';
import { QUEST_TYPES } from '../../const';

function QuestPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const params = useParams();
  const cardId = params.id;

  useEffect(() => {
    if (cardId) {
      dispatch(fetchQuestById(cardId));
    }
  }, [cardId, dispatch]);

  const currentQuest = useAppSelector(getQuest);
  const isLoading = useAppSelector(getQuestIsLoading);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="wrapper">
      <Helmet>
        <title>Escape Room. Quest.</title>
      </Helmet>
      <Header />
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={currentQuest?.coverImgWebp} />
            <img src={currentQuest?.coverImg} srcSet={currentQuest?.coverImg} width={1366} height={768} alt="" />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">
              {currentQuest?.title}
            </h1>
            <p className="subtitle quest-page__subtitle">
              <span className="visually-hidden">Жанр:</span>
              {QUEST_TYPES[currentQuest?.type as keyof typeof QUEST_TYPES]}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width={11} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-person" />
                </svg>
                {currentQuest?.peopleMinMax} чел
              </li>
              <li className="tags__item">
                <svg width={14} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-level" />
                </svg>
                {currentQuest?.level}
              </li>
            </ul>
            <p className="quest-page__description">
              {currentQuest?.description}
            </p>
            <Link className="btn btn--accent btn--cta quest-page__btn" to={`${AppRoute.Booking}`}>Забронировать</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>

  );
}

export default QuestPage;
