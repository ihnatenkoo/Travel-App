import { FC, useState } from 'react';
import cn from 'classnames';
import s from './Filters.module.scss';

const cities = [
  { location: 'Paris' },
  { location: 'Rome' },
  { location: 'Kyiv' },
  { location: 'Prague' },
  { location: 'New York' },
  { location: 'Toronto' }
];

const Filters: FC = () => {
  const [filter, setFilter] = useState('');

  return (
    <div className={s.filters}>
      {cities.map((city) => (
        <button
          onClick={() => setFilter(city.location)}
          key={city.location}
          className={cn({ [s.active]: city.location === filter })}
        >
          {city.location}
        </button>
      ))}
    </div>
  );
};
export default Filters;
