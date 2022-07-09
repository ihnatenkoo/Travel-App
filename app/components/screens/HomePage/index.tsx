import { FC } from 'react';
import { IPlace } from '../../../interfaces/place';
import PopularPlaces from './PopularPlaces/PopularPlaces';
import SearchPanel from './SearchPanel/SearchPanel';

interface IHomeProps {
  places: Array<IPlace>;
}

const HomePage: FC<IHomeProps> = ({ places }) => {
  return (
    <>
      <SearchPanel />
      <PopularPlaces places={places} />
    </>
  );
};

export default HomePage;
