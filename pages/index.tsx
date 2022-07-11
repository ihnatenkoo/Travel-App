import { NextPage, GetStaticProps } from 'next';
import { IPlace } from '../app/interfaces/place';
import { API_URL } from '../app/constants';
import MainLayout from '../app/layouts/MainLayout';

import axios from 'axios';
import SearchPanel from '../app/components/screens/HomePage/SearchPanel/SearchPanel';
import PopularPlaces from '../app/components/screens/HomePage/PopularPlaces/PopularPlaces';
import { useState } from 'react';
interface IHome {
  initialPlaces: Array<IPlace>;
}

const Home: NextPage<IHome> = ({ initialPlaces }) => {
  const [places, setPlaces] = useState<Array<IPlace>>(initialPlaces);

  return (
    <MainLayout>
      <SearchPanel setPlaces={setPlaces} initialPlaces={initialPlaces} places={places} />
      <PopularPlaces places={places} />
    </MainLayout>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get(`${API_URL}/places`);

  return {
    props: {
      initialPlaces: data
    }
  };
};

export default Home;
