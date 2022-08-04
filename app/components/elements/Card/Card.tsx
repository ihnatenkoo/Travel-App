import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import { IPlace } from '@/types/';

import s from './Card.module.scss';
interface ICardProps {
  place: IPlace;
}

export const Card: FC<ICardProps> = ({ place }) => {
  return (
    <div className={s.card}>
      <Link href={`/place/${place.name}`}>
        <a>
          <div className={s.card__image}>
            <Image src={place.image} alt={place.name} layout="fill" objectFit="cover" />
          </div>
        </a>
      </Link>
      <h3 className={s.card__title}>{`${place.location.city}, ${place.location.country}`}</h3>
    </div>
  );
};
