import { useAppDispatch, useAppSelector } from '../../hooks';
import { getDifficultLevel, getQuestType } from '../../store/quests-process/quests-process.selectors';
import { setDifficultLevel ,setQuestType } from '../../store/quests-process/quests-process.slice';
import { QUEST_TYPES_FILTERS, QUEST_LEVELS_FILTERS } from '../../const';

const FilterItem = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const currentDifficultyFilter = useAppSelector(getDifficultLevel);
  const currentQuestType = useAppSelector(getQuestType);

  const handleQuestTypeChange = (questType: string) => {
    dispatch(setQuestType(questType));
  };

  const handleQuestDifficultyChange = (questDifficulty: string) => {
    dispatch(setDifficultLevel(questDifficulty));
  };

  return (
    <form className="filter" action="#" method="get">
      <fieldset className="filter__section">
        <legend className="visually-hidden">Тематика</legend>
        <ul className="filter__list">
          {QUEST_TYPES_FILTERS.map((filter) => (
            <li className="filter__item" key={filter.id}>
              <input
                type="radio"
                name="type"
                id={filter.id}
                onChange={() => handleQuestTypeChange(filter.id)}
                checked={currentQuestType === filter.id}
              />
              <label className="filter__label" htmlFor={filter.id}>
                <svg className="filter__icon" width={filter.width} height={filter.height} aria-hidden="true">
                  <use xlinkHref={`#${filter.icon}`} />
                </svg><span className="filter__label-text">{filter.text}</span>
              </label>
            </li>
          ))}
        </ul>
      </fieldset>
      <fieldset className="filter__section">
        <legend className="visually-hidden">Сложность</legend>
        <ul className="filter__list">
          {QUEST_LEVELS_FILTERS.map((filter) => (
            <li className="filter__item" key={filter.id}>
              <input
                type="radio"
                name="level"
                id={filter.id}
                onChange={() => handleQuestDifficultyChange(filter.id)}
                checked={currentDifficultyFilter === filter.id}
              />
              <label className="filter__label" htmlFor={filter.id}><span className="filter__label-text">{filter.text}</span>
              </label>
            </li>
          ))}
        </ul>
      </fieldset>
    </form>
  );
};

export default FilterItem;
