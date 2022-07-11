import { ChangeEvent, FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { IFiltersPopularCountries, TypeSetState } from '../../../../interfaces/common';
import { IPlace } from '../../../../interfaces/place';

import s from './SearchPanel.module.scss';
import cn from 'classnames';
interface ISearchPanelProps {
  initialPlaces: Array<IPlace>;
  filtersPopularCountries: Array<IFiltersPopularCountries>;
  setPlaces: TypeSetState<Array<IPlace>>;
}

const SearchPanel: FC<ISearchPanelProps> = ({
  setPlaces,
  initialPlaces,
  filtersPopularCountries
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

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
    filteredPlaces();
  };

  const filteredPlaces = () => {
    if (filter === 'All') {
      setPlaces(initialPlaces);
      return;
    }
    const places = initialPlaces.filter((elem) => elem.location.country === filter);
    setPlaces(places);
  };

  const changeFilterHandler = (country: IFiltersPopularCountries) => {
    setFilter(country.location);
    setSearchTerm('');
  };

  useEffect(() => {
    filteredPlaces();
  }, [filter, initialPlaces]);

  return (
    <section className={s.section}>
      <h1 className={s.section__title}>Best places for trip</h1>
      <Image
        src={'/images/map.png'}
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        alt="world map background image"
      />

      <div className={s.section__inner}>
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

        <div className={s.filters}>
          {filtersPopularCountries.map((country) => (
            <button
              onClick={() => changeFilterHandler(country)}
              key={country.location}
              className={cn({ [s.active]: country.location === filter })}
            >
              {country.location}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchPanel;
