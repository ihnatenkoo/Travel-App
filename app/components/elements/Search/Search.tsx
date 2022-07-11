import { ChangeEvent, FC } from 'react';
import { TypeSetState } from '../../../interfaces/common';
import { IPlace } from '../../../interfaces/place';

import cn from 'classnames';
import s from './Search.module.scss';
interface ISearchProps {
  places: Array<IPlace>;
  setPlaces: TypeSetState<Array<IPlace>>;
  initialPlaces: Array<IPlace>;
  searchTerm: string;
  filter: string;
  setSearchTerm: TypeSetState<string>;
  setFilter: TypeSetState<string>;
}

const Search: FC<ISearchProps> = ({
  places,
  setPlaces,
  initialPlaces,
  filter,
  setFilter,
  searchTerm,
  setSearchTerm
}) => {
  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    const lowerCaseValue = e.target.value.toLowerCase();

    const places = initialPlaces.filter((elem) => {
      if (filter === 'All') {
        return (
          elem.location.city.toLowerCase().includes(lowerCaseValue) ||
          elem.location.country.toLowerCase().includes(lowerCaseValue)
        );
      } else {
        return (
          (elem.location.city.toLowerCase().includes(lowerCaseValue) ||
            elem.location.country.toLowerCase().includes(lowerCaseValue)) &&
          elem.location.country === filter
        );
      }
    });

    setPlaces(places);
  };

  const clearSearchButtonHandler = () => {
    setSearchTerm('');
    setPlaces(places);
  };

  return (
    <div className={s.search}>
      <span className={cn('material-icons-outlined', s.search__icon, s.find)}>search</span>
      <span
        className={cn('material-icons-outlined', s.search__icon, s.close, {
          [s.active]: searchTerm
        })}
        onClick={clearSearchButtonHandler}
      >
        close
      </span>

      <input
        type="text"
        name="search-query"
        placeholder="Search place..."
        value={searchTerm}
        className={s.search__input}
        onChange={searchHandler}
      />
    </div>
  );
};
export default Search;
