import { DetailedHTMLProps, FC, HTMLAttributes, useState } from 'react';

import cn from 'classnames';
import s from './FavoriteButton.module.scss';

interface ButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const FavoriteButton: FC<ButtonProps> = ({ className }) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <button
      className={cn(s.button, className, { [s.fill]: active })}
      onClick={() => setActive((prev) => !prev)}
    >
      <span className="material-icons-outlined">{active ? 'favorite' : 'favorite_border'}</span>
    </button>
  );
};
export default FavoriteButton;
