import { NextPage, GetStaticProps } from 'next';
import { IPlace } from '../app/interfaces/place';
import MainLayout from '../app/layouts/MainLayout';
import HomePage from '../app/components/screens/HomePage';

import axios from 'axios';
interface IHome {
  places: Array<IPlace>;
}

const Home: NextPage<IHome> = ({ places }) => {
  return (
    <MainLayout>
      <HomePage />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get('http://localhost:3000//api/places');

  return {
    props: {
      places: data
    }
  };
};

export default Home;
