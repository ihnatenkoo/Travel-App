import { FC, useState } from 'react';
import Image from 'next/image';
import Filters from '../../../elements/Filters/Filters';
import Search from '../../../elements/Search/Search';

import s from './SearchPanel.module.scss';
import { TypeSetState } from '../../../../interfaces/common';
import { IPlace } from '../../../../interfaces/place';

interface ISearchPanelProps {
  setPlaces: TypeSetState<Array<IPlace>>;
  initialPlaces: Array<IPlace>;
}

const SearchPanel: FC<ISearchPanelProps> = ({ setPlaces, initialPlaces }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

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
        <Search
          setPlaces={setPlaces}
          initialPlaces={initialPlaces}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filter={filter}
        />
        <Filters
          setPlaces={setPlaces}
          initialPlaces={initialPlaces}
          filter={filter}
          setFilter={setFilter}
          setSearchTerm={setSearchTerm}
        />
      </div>
    </section>
  );
};

export default SearchPanel;
