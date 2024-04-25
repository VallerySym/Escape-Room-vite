import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchReservedQuests,deleteReservedQuest } from '../../store/api-actions';
import { getReservedQuests } from '../../store/booking-process/booking-process.selectors';
import { Link } from 'react-router-dom';
import { QuestDate } from '../../const';

function MyQuestsPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchReservedQuests());
  }, [dispatch]);
  const reservedQuests = useAppSelector(getReservedQuests);

  return (
    <div className="wrapper">
      <Helmet>
        <title>Escape Room. My quests.</title>
      </Helmet>
      <Header />
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"
            />
            <img
              src="img/content/maniac/maniac-bg-size-m.jpg"
              srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x"
              width={1366}
              height={1959}
              alt=""
            />
          </picture>
        </div>
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">
              Мои бронирования
            </h1>
          </div>
          <div className="cards-grid">
            {reservedQuests.length ? reservedQuests.map((reservedQuest) => (
              <div className="quest-card" key={reservedQuest.id}>
                <div className="quest-card__img">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={reservedQuest.quest.previewImgWebp}
                    />
                    <img
                      src={reservedQuest.quest.previewImg}
                      srcSet={reservedQuest.quest.previewImgWebp}
                      width={344}
                      height={232}
                      alt="Мужчина в маске в тёмном переходе."
                    />
                  </picture>
                </div>
                <div className="quest-card__content">
                  <div className="quest-card__info-wrapper">
                    <Link className="quest-card__link" to={`/quest/${reservedQuest.quest.id}`}>
                      {reservedQuest.quest.title}
                    </Link>
                    <span className="quest-card__info">
                      {`[${reservedQuest.date === 'today' ? QuestDate.today : QuestDate.tomorrow} ${reservedQuest.time} ${reservedQuest.location.address}]`}
                    </span>
                  </div>
                  <ul className="tags quest-card__tags">
                    <li className="tags__item">
                      <svg width={11} height={14} aria-hidden="true">
                        <use xlinkHref="#icon-person" />
                      </svg>
                      {reservedQuest.peopleCount}&nbsp;чел
                    </li>
                    <li className="tags__item">
                      <svg width={14} height={14} aria-hidden="true">
                        <use xlinkHref="#icon-level" />
                      </svg>
                      {reservedQuest.quest.level}
                    </li>
                  </ul>
                  <button
                    className="btn btn--accent btn--secondary quest-card__btn"
                    type="button"
                    onClick={() => {
                      dispatch(deleteReservedQuest(reservedQuest.id));
                    }}
                  >
                  Отменить
                  </button>
                </div>
              </div>
            )) : <h2>У вас нет забронированных квестов</h2>}
          </div>
        </div>
      </main>
      <Footer />
    </div>

  );
}

export default MyQuestsPage;
