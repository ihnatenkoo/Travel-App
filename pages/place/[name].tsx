import { NextPage, GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import MainLayout from '../../app/layouts/MainLayout';
import { IPlace } from '@/types/';
import { PlaceIntro, PlaceInformation } from '@/SinglePlace/index';
import { TripButton } from '@/ui/index';
import { GMap, SimpleMap } from '@/components/maps';

import axios from 'axios';
interface IPlaceProps {
  place: IPlace;
}

const SinglePlace: NextPage<IPlaceProps> = ({ place }) => {
  const { description, rating, duration, coordinates } = place;
  const { city } = place.location;
  const { country } = place.location;

  return (
    <MainLayout>
      <PlaceIntro image={place.image} city={city} />
      <PlaceInformation
        description={description}
        rating={rating}
        duration={duration}
        city={city}
        country={country}
      />
      <SimpleMap country={country} />
      <GMap coordinates={coordinates} />
      <TripButton />
    </MainLayout>
  );
};

export default SinglePlace;

export const getServerSideProps = async ({ params }: GetServerSidePropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  try {
    const { data: place } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/place/${params.name}`
    );

    return {
      props: { place },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
