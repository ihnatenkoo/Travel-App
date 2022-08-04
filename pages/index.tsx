import { useState } from 'react';
import { NextPage, GetStaticProps } from 'next';
import MainLayout from '../app/layouts/MainLayout';
import { IPlace, IFiltersPopularCountries } from '@/types/';
import { SearchPanel, PopularPlaces } from '@/HomePage/index';

import axios from 'axios';
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
    const { data: initialPlaces } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/place`);
    const { data: filtersPopularCountries } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/filtersPopularCountries`
    );

    return {
      props: {
        initialPlaces,
        filtersPopularCountries,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Home;
