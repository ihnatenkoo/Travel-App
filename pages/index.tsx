import { NextPage, GetStaticProps } from 'next';
import { IPlace } from '../app/interfaces/place';
import { API_URL } from '../app/constants';
import MainLayout from '../app/layouts/MainLayout';

import axios from 'axios';
import SearchPanel from '../app/components/screens/HomePage/SearchPanel/SearchPanel';
import PopularPlaces from '../app/components/screens/HomePage/PopularPlaces/PopularPlaces';
import { useState } from 'react';
import { IFiltersPopularCountries } from '../app/interfaces/common';
interface IHomeProps {
  initialPlaces: Array<IPlace>;
  filtersPopularCountries: Array<IFiltersPopularCountries>;
}

const Home: NextPage<IHomeProps> = ({ initialPlaces, filtersPopularCountries }) => {
  const [places, setPlaces] = useState<Array<IPlace>>(initialPlaces);

  return (
    <MainLayout>
      <SearchPanel
        setPlaces={setPlaces}
        initialPlaces={initialPlaces}
        filtersPopularCountries={filtersPopularCountries}
      />
      <PopularPlaces places={places} />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: initialPlaces } = await axios.get(`${API_URL}/place`);
    const { data: filtersPopularCountries } = await axios.get(`${API_URL}/filtersPopularCountries`);

    return {
      props: {
        initialPlaces,
        filtersPopularCountries
      }
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
};

export default Home;
