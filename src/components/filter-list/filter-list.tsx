import FilterItem from '../filter-item/filter-item';
import {FilterTypes } from '../../const';

type FilterListProps = {
  filters: FilterTypes[];
};

const FilterList = ({filters}: FilterListProps): JSX.Element => (
  <ul className="filter__list">
    {filters.map((item) => <FilterItem key={item.id} filter={item} />)}
  </ul>
);

export default FilterList;
