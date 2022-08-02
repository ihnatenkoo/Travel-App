import { NextPage, GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import MainLayout from '../../app/layouts/MainLayout';
import { IPlace } from '../../app/interfaces/place';
import PlaceIntro from '../../app/components/screens/SinglePlace/PlaceIntro/PlaceIntro';
import PlaceInformation from '../../app/components/screens/SinglePlace/PlaceInformation/PlaceInformation';
import { Map } from '../../app/components/common/GoogleMap/GoogleMap';

import axios from 'axios';
import TripButton from '../../app/components/elements/TripButton/TripButton';
import SimpleMap from '../../app/components/common/SimpleMap/SimpleMap';
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
      <Map coordinates={coordinates} />
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
