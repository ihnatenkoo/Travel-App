import { GetStaticPropsContext, GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import MainLayout from '../../app/layouts/MainLayout';
import axios from 'axios';
import { API_URL } from '../../app/constants';
import { IPlace } from '../../app/interfaces/place';

interface IPlaceProps {
  place: IPlace;
}

const Place: NextPage<IPlaceProps> = ({ place }) => {
  return <MainLayout>{place.name}</MainLayout>;
};

export default Place;

export const getStaticProps: GetStaticProps = async ({
  params
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true
    };
  }

  try {
    const { data: place } = await axios.get(`${API_URL}/places/${params.name}`);

    return {
      props: { place }
    };
  } catch {
    return {
      notFound: true
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(`${API_URL}/places`);

  const paths = data.map(({ name }: { name: string }) => ({
    params: { name }
  }));

  return {
    paths,
    fallback: 'blocking'
  };
};
