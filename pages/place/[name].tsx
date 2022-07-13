import { NextPage, GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import MainLayout from '../../app/layouts/MainLayout';
import { API_URL } from '../../app/constants';
import { IPlace } from '../../app/interfaces/place';

import axios from 'axios';

interface IPlaceProps {
  place: IPlace;
}

const Place: NextPage<IPlaceProps> = ({ place }) => {
  return <MainLayout>{place.name}</MainLayout>;
};

export default Place;

export const getServerSideProps = async ({ params }: GetServerSidePropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true
    };
  }

  try {
    const { data: place } = await axios.get(`${API_URL}/place/${params.name}`);

    return {
      props: { place }
    };
  } catch {
    return {
      notFound: true
    };
  }
};
