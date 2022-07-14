import { FC } from 'react';

import s from './TripButton.module.scss';

const TripButton: FC = () => {
  return (
    <div className={s.trip}>
      <button className={s.trip__button}>
        <h3>Book a trip</h3>
        <div className={s.trip__circle}>
          <span className="material-icons-outlined">arrow_right_alt</span>
        </div>
      </button>
    </div>
  );
};
export default TripButton;
