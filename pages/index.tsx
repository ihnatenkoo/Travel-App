import { NextPage, GetStaticProps } from 'next';
import { IPlace } from '../app/interfaces/place';
import { API_URL } from '../app/constants';
import MainLayout from '../app/layouts/MainLayout';
import HomePage from '../app/components/screens/HomePage';

import axios from 'axios';
interface IHome {
  places: Array<IPlace>;
}

const Home: NextPage<IHome> = ({ places }) => {
  return (
    <MainLayout>
      <HomePage places={places} />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get(`${API_URL}/places`);

  return {
    props: {
      places: data
    }
  };
};

export default Home;
