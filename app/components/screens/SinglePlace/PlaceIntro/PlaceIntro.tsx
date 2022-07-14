import { FC } from 'react';
import Image from 'next/image';

import s from './PlaceIntro.module.scss';

interface IPlaceIntroProps {
  image: string;
  city: string;
}

const PlaceIntro: FC<IPlaceIntroProps> = ({ image, city }) => {
  return (
    <div className={s.background}>
      <Image src={image} alt={`${city}  image`} layout="fill" objectFit="cover" />
    </div>
  );
};
export default PlaceIntro;
