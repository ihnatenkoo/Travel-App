import cn from 'classnames';
import Image from 'next/image';
import { ChangeEvent, FC, KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';

import { IPlace, IFiltersPopularCountries, TypeSetState } from '@/types/';

import s from './SearchPanel.module.scss';

interface ISearchPanelProps {
	initialPlaces: Array<IPlace>;
	filtersPopularCountries: Array<IFiltersPopularCountries>;
	setPlaces: TypeSetState<Array<IPlace>>;
}

export const SearchPanel: FC<ISearchPanelProps> = ({
	setPlaces,
	initialPlaces,
	filtersPopularCountries,
}) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [filter, setFilter] = useState('All');

	const input = useRef<HTMLInputElement>(null);

	const inputBlur = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			input.current?.blur();
		}
	};

	const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
		const lowerCaseValue = e.target.value.toLowerCase().trim();

		const places = initialPlaces.filter((elem) => {
			if (filter === 'All') {
				return (
					elem.location.city.toLowerCase().includes(lowerCaseValue) ||
					elem.location.country.toLowerCase().includes(lowerCaseValue)
				);
			} else {
				return (
					(elem.location.city.toLowerCase().includes(lowerCaseValue) ||
						elem.location.country.toLowerCase().includes(lowerCaseValue)) &&
					elem.location.country === filter
				);
			}
		});

		setPlaces(places);
	};

	const clearSearchButtonHandler = () => {
		setSearchTerm('');
		filteredPlaces();
	};

	const filteredPlaces = useCallback(() => {
		if (filter === 'All') {
			setPlaces(initialPlaces);
			return;
		}
		const places = initialPlaces.filter((elem) => elem.location.country === filter);
		setPlaces(places);
	}, [filter, initialPlaces, setPlaces]);

	const changeFilterHandler = (country: IFiltersPopularCountries) => {
		setFilter(country.location);
		setSearchTerm('');
	};

	useEffect(() => {
		filteredPlaces();
	}, [filter, initialPlaces, filteredPlaces]);

	return (
		<section className={s.section}>
			<h1 className={s.section__title}>Best places for trip</h1>
			<Image
				src={'/images/map.png'}
				layout="fill"
				objectFit="cover"
				objectPosition="top"
				alt="world map background image"
			/>

			<div className={s.section__inner}>
				<div className={s.search}>
					<span className={cn('material-icons-outlined', s.search__icon, s.find)}>search</span>
					<span
						className={cn('material-icons-outlined', s.search__icon, s.close, {
							[s.active]: searchTerm,
						})}
						onClick={clearSearchButtonHandler}
					>
						close
					</span>

					<input
						ref={input}
						type="text"
						name="search-query"
						placeholder="Search place..."
						value={searchTerm}
						className={s.search__input}
						onChange={searchHandler}
						onKeyPress={inputBlur}
					/>
				</div>

				<div className={s.filters}>
					{filtersPopularCountries.map((country) => (
						<button
							onClick={() => changeFilterHandler(country)}
							key={country.location}
							className={cn({ [s.active]: country.location === filter })}
						>
							{country.name}
						</button>
					))}
				</div>
			</div>
		</section>
	);
};
