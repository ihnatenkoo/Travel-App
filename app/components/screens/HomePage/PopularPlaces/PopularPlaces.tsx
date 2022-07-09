import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { IPlace } from '../../../../interfaces/place';

import s from './PopularPlaces.module.scss';

interface IPopularPlacesProps {
  places: Array<IPlace>;
}

const PopularPlaces: FC<IPopularPlacesProps> = ({ places }) => {
  return (
    <section className={s.places}>
      <h2 className={s.places__title}>Popular places</h2>
      <div className={s.places__inner}>
        {places.map((place) => (
          <div key={place.slug} className={s.places__card}>
            <Link href={`places/${place.slug}`}>
              <a>
                <Image src={place.image} alt={place.slug} layout="fill" objectFit="cover" />
              </a>
            </Link>
            <h3 className={s.places__card__title}>
              {`${place.location.city}, ${place.location.country}`}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};
export default PopularPlaces;
