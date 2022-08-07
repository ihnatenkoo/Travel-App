import cn from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes, useState } from 'react';

import s from './FavoriteButton.module.scss';

interface ButtonProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const FavoriteButton: FC<ButtonProps> = ({ className }) => {
	const [isFav, setIsFav] = useState<boolean>(false);

	return (
		<button
			className={cn(s.button, className, { [s.fill]: isFav })}
			onClick={() => setIsFav((prev) => !prev)}
		>
			<span className="material-icons-outlined">{isFav ? 'favorite' : 'favorite_border'}</span>
		</button>
	);
};
