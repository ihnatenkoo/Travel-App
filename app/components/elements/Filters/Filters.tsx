import { FC, useEffect } from 'react';
import { TypeSetState } from '../../../interfaces/common';
import { IPlace } from '../../../interfaces/place';

import cn from 'classnames';
import s from './Filters.module.scss';

const countries = [
  { location: 'All' },
  { location: 'Ukraine' },
  { location: 'Italy' },
  { location: 'Japan' },
  { location: 'USA' },
  { location: 'United Kingdom' }
];
interface IFiltersProps {
  setPlaces: TypeSetState<Array<IPlace>>;
  initialPlaces: Array<IPlace>;
  filter: string;
  setFilter: TypeSetState<string>;
  setSearchTerm: TypeSetState<string>;
}

const Filters: FC<IFiltersProps> = ({
  setPlaces,
  initialPlaces,
  filter,
  setFilter,
  setSearchTerm
}) => {
  useEffect(() => {
    if (filter === 'All') {
      setPlaces(initialPlaces);
      return;
    }
    const places = initialPlaces.filter((elem) => elem.location.country === filter);
    setPlaces(places);
  }, [filter, initialPlaces, setPlaces]);

  const clickHandler = (country: any) => {
    setFilter(country.location);
    setSearchTerm('');
  };

  return (
    <div className={s.filters}>
      {countries.map((country) => (
        <button
          onClick={() => clickHandler(country)}
          key={country.location}
          className={cn({ [s.active]: country.location === filter })}
        >
          {country.location}
        </button>
      ))}
    </div>
  );
};
export default Filters;
