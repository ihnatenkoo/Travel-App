import { FC } from 'react';
import Image from 'next/image';
import Filters from '../../../elements/Filters/Filters';
import Search from '../../../elements/Search/Search';

import s from './SearchPanel.module.scss';

const SearchPanel: FC = () => {
  return (
    <section className={s.section}>
      <h1 className={s.section__title}>Best places for trip</h1>
      <Image
        src={'/images/map.png'}
        layout="fill"
        objectFit="contain"
        objectPosition="top"
        alt="world map background image"
      />
      <Search />
      <Filters />
    </section>
  );
};

export default SearchPanel;
