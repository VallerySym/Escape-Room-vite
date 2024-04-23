import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Quest } from '../../types/quest';
import { AppRoute } from '../../const';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

type QuestPageProps = {
  quests: Quest;
}

function QuestPage({ quests }: QuestPageProps): JSX.Element {
  const params = useParams();
  const cardId = params.id;
  const selectedCard = quests.filter((quest) => quest.id === cardId)[0];
  const { title, peopleMinMax, level, type, quest} = selectedCard;
  const { description, coverImg, coverImgWebp } = quest;

  return (
    <div className="wrapper">
      <Helmet>
        <title>Escape Room. Quest.</title>
      </Helmet>
      <Header />
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={coverImgWebp} />
            <img src={coverImg} srcSet={coverImg} width={1366} height={768} alt="" />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">
              {title}
            </h1>
            <p className="subtitle quest-page__subtitle">
              <span className="visually-hidden">Жанр:</span>{type}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width={11} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-person" />
                </svg>
                {peopleMinMax} чел
              </li>
              <li className="tags__item">
                <svg width={14} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-level" />
                </svg>
                {level}
              </li>
            </ul>
            <p className="quest-page__description">
              {description}
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
