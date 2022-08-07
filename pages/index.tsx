import axios from 'axios';
import { GetStaticProps, NextPage } from 'next';
import { useState } from 'react';

import { IFiltersPopularCountries, IPlace } from '@/types/';

import { Meta } from '@/utils/Meta';

import { PopularPlaces, SearchPanel } from '@/HomePage/index';

import MainLayout from '../app/layouts/MainLayout';

interface IHomeProps {
	initialPlaces: Array<IPlace>;
	filtersPopularCountries: Array<IFiltersPopularCountries>;
}

const Home: NextPage<IHomeProps> = ({ initialPlaces, filtersPopularCountries }) => {
	const [places, setPlaces] = useState<Array<IPlace>>(initialPlaces);

	return (
		<MainLayout>
			<Meta
				title="Book your trip"
				description="Application for finding places for your vacation, book your vacation right now"
			/>
			<SearchPanel
				setPlaces={setPlaces}
				initialPlaces={initialPlaces}
				filtersPopularCountries={filtersPopularCountries}
			/>
			<PopularPlaces places={places} />
		</MainLayout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: initialPlaces } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/place`);
		const { data: filtersPopularCountries } = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/filtersPopularCountries`
		);

		return {
			props: {
				initialPlaces,
				filtersPopularCountries,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default Home;
