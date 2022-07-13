import { NextPage, GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';
import MainLayout from '../../app/layouts/MainLayout';
import { IPlace } from '../../app/interfaces/place';

import cn from 'classnames';
import s from './Place.module.scss';
import axios from 'axios';

interface IPlaceProps {
  place: IPlace;
}

const SinglePlace: NextPage<IPlaceProps> = ({ place }) => {
  return (
    <MainLayout>
      <div className={s.page__img}>
        <Image
          src={place.image}
          alt={`${place.location.city} image`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className={s.page__info}>
        <div className={s.location}>
          <span className="material-icons-outlined">place</span>
          <h2 className={s.title}>
            {place.location.country}, {place.location.city}
          </h2>
        </div>

        <div className={s.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate alias ut iusto,
          dolorem a, ea praesentium dicta odio, adipisci laudantium beatae soluta facere unde
          eligendi aspernatur! Blanditiis
        </div>

        <div className={s.feature}>
          <span className={cn(s.feature__item, s.feature__rating)}>
            <span className="material-icons-outlined">star</span>
            {place.rating}/10
          </span>
          <span className={s.feature__item}>
            <span className="material-icons-outlined">calendar_month</span>
            {place.duration} days
          </span>
        </div>
      </div>
    </MainLayout>
  );
};

export default SinglePlace;

export const getServerSideProps = async ({ params }: GetServerSidePropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true
    };
  }

  try {
    const { data: place } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/place/${params.name}`
    );

    return {
      props: { place }
    };
  } catch {
    return {
      notFound: true
    };
  }
};
