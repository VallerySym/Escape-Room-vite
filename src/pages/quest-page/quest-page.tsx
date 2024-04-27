import { Helmet } from 'react-helmet-async';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Spinner from '../../components/spinner/spinner';
import { fetchDetailedQuest } from '../../store/api-actions';
import { getQuestIsLoading, getQuestIsNotFound } from '../../store/quest-process/quest-process.selectors';
import { getDetailedQuest } from '../../store/booking-process/booking-process.selectors';
import { AppRoute, QUEST_TYPES } from '../../const';

function QuestPage(): JSX.Element {
  const params = useParams();
  const cardId = params.id;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cardId) {
      dispatch(fetchDetailedQuest(cardId));
    }
  }, [cardId, dispatch]);

  const currentQuest = useAppSelector(getDetailedQuest);
  const questIsLoading = useAppSelector(getQuestIsLoading);
  const questIsNotFound = useAppSelector(getQuestIsNotFound);

  return (
    <div className="wrapper">
      <Helmet>
        <title>Escape Room. Quest.</title>
      </Helmet>
      <Header />
      <main className="decorated-page quest-page">
        {questIsLoading && <Spinner />}
        {questIsNotFound && <Navigate to={AppRoute.NotFound} />}
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
              {QUEST_TYPES[currentQuest.type as keyof typeof QUEST_TYPES]}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width={11} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-person" />
                </svg>
                {currentQuest.peopleMinMax[0]}-{currentQuest.peopleMinMax[1]} чел
              </li>
              <li className="tags__item">
                <svg width={14} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-level" />
                </svg>
                {currentQuest.level}
              </li>
            </ul>
            <p className="quest-page__description">
              {currentQuest.description}
            </p>
            <Link
              id={cardId}
              className="btn btn--accent btn--cta quest-page__btn"
              to={`/quest/${(cardId) as string}/booking`}
              onClick={(evt) => {
                evt.preventDefault();
                navigate(`/quest/${(cardId) as string}/booking`);
              }}
            >
              Забронировать
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>

  );
}

export default QuestPage;
