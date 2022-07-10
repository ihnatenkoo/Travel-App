import { ChangeEvent, FC } from 'react';
import { TypeSetState } from '../../../interfaces/common';
import { IPlace } from '../../../interfaces/place';

import cn from 'classnames';
import s from './Search.module.scss';
interface ISearchProps {
  setPlaces: TypeSetState<Array<IPlace>>;
  initialPlaces: Array<IPlace>;
  searchTerm: string;
  filter: string;
  setSearchTerm: TypeSetState<string>;
}

const Search: FC<ISearchProps> = ({
  setPlaces,
  initialPlaces,
  filter,
  searchTerm,
  setSearchTerm
}) => {
  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    const places = initialPlaces.filter((elem) => {
      if (filter === 'All') {
        return (
          elem.location.city.toLowerCase().includes(value) ||
          elem.location.country.toLowerCase().includes(value)
        );
      } else {
        return (
          (elem.location.city.toLowerCase().includes(value) ||
            elem.location.country.toLowerCase().includes(value)) &&
          elem.location.country === filter
        );
      }
    });

    setPlaces(places);
  };

  return (
    <div className={s.search}>
      <span className={cn('material-icons-outlined', s.search__icon)}>search</span>

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
