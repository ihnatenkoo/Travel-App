import axios from 'axios';
import { GetStaticProps } from 'next';
import { NextPage } from 'next';
import { IPlace } from '../app/interfaces/place';
import MainLayout from '../app/layouts/MainLayout';
interface IHome {
  places: Array<IPlace>;
}

const Home: NextPage<IHome> = ({ places }) => {
  return <MainLayout>Home</MainLayout>;
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
