import { Link } from 'react-router-dom';
import { QuestInfo } from '../../types/quest-info';

type QuestCardProps = {
    questCard: QuestInfo;
}

function QuestCard({ questCard }: QuestCardProps): JSX.Element {
  const { id, title, peopleMinMax, level, previewImg, previewImgWebp } = questCard;

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
        <source type="image/webp" srcSet={previewImgWebp} />
        <img src={previewImg} width={344} height={232} alt={title} />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link
            className="quest-card__link"
            to={`quest/${id}`}
          >
            {title}
          </Link>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person" />
            </svg>
            {`${peopleMinMax[0]}-${peopleMinMax[1]} чел`} 
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level" />
            </svg>
            {level}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default QuestCard;
