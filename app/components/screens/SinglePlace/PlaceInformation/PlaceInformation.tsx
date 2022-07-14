import { FC } from 'react';

import cn from 'classnames';
import s from './PlaceInformation.module.scss';

interface PlaceInformation {
  description: string;
  rating: number;
  duration: number;
  city: string;
  country: string;
}

const PlaceInformation: FC<PlaceInformation> = ({
  description,
  rating,
  duration,
  city,
  country
}) => {
  return (
    <div className={s.info}>
      <div className={s.info__location}>
        <span className="material-icons-outlined">place</span>
        <h2 className={s.info__location__title}>
          {country}, {city}
        </h2>
      </div>

      <div className={s.info__description}>{description}</div>

      <div className={s.info__feature}>
        <span className={cn(s.info__feature__item, s.info__feature__rating)}>
          <span className="material-icons-outlined">star</span>
          {rating}/10
        </span>
        <span className={s.info__feature__item}>
          <span className="material-icons-outlined">calendar_month</span>
          {duration} days
        </span>
      </div>
    </div>
  );
};
export default PlaceInformation;