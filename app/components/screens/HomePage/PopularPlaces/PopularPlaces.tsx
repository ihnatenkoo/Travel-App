import { FC } from 'react';

import { IPlace } from '@/types/';

import { Card } from '@/elements/index';

import s from './PopularPlaces.module.scss';

interface IPopularPlacesProps {
	places: Array<IPlace>;
}

export const PopularPlaces: FC<IPopularPlacesProps> = ({ places }) => {
	return (
		<section className={s.places}>
			<h2 className={s.places__title}>Popular places</h2>
			<div className={s.places__inner}>
				{places.length === 0 ? (
					<div className={s.places__card}>NOT FOUND</div>
				) : (
					places.map((place) => <Card place={place} key={place.name} />)
				)}
			</div>
		</section>
	);
};
