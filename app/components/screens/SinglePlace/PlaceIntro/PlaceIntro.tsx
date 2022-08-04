import { FC } from 'react';
import Image from 'next/image';
import { FavoriteButton } from '@/ui/index';

import s from './PlaceIntro.module.scss';
interface IPlaceIntroProps {
  image: string;
  city: string;
}

export const PlaceIntro: FC<IPlaceIntroProps> = ({ image, city }) => {
  return (
    <div className={s.background}>
      <Image src={image} alt={`${city}  image`} layout="fill" objectFit="cover" />
      <FavoriteButton className={s.background__favorite} />
    </div>
  );
};
