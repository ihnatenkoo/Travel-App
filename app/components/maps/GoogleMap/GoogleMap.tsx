import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React, { FC, useRef } from 'react';

interface IMapPRops {
	coordinates: {
		lat: number;
		lng: number;
	};
}

const containerStyle = {
	borderRadius: '25px',
	margin: '0 auto',
	width: '400px',
	maxWidth: '100%',
	height: '392px',
};

const defaultOptions = {
	fullscreenControl: false,
	streetViewControl: false,
	panControl: false,
};

export const GMap: FC<IMapPRops> = ({ coordinates }) => {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: String(process.env.NEXT_PUBLIC_MAPS_API_KEY),
	});

	const mapRef = useRef(undefined);

	const onLoad = React.useCallback(function callback(map: any) {
		mapRef.current = map;
	}, []);

	const onUnmount = React.useCallback(function callback(map: any) {
		mapRef.current = undefined;
	}, []);

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={coordinates}
			zoom={12}
			onLoad={onLoad}
			onUnmount={onUnmount}
			options={defaultOptions}
		></GoogleMap>
	) : (
		<h2>Loading map....</h2>
	);
};
