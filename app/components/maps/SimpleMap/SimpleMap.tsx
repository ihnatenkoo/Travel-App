import { FC } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';

interface ISimpleMap {
	country: string;
}

export const SimpleMap: FC<ISimpleMap> = ({ country }) => {
	return (
		<ComposableMap
			projectionConfig={{
				center: [10, 0],
				scale: 200,
			}}
		>
			<Geographies geography="/geography.json">
				{({ geographies }) =>
					geographies.map((geo) => {
						const isCurrent = geo.properties.name === country;

						return (
							<Geography
								key={geo.rsmKey}
								geography={geo}
								fill={isCurrent ? '#eb601e' : '#39373b'}
								stroke={isCurrent ? 'transparent' : '#212022'}
								style={{
									default: { outline: 'none' },
									hover: { outline: 'none' },
									pressed: { outline: 'none' },
								}}
							/>
						);
					})
				}
			</Geographies>
		</ComposableMap>
	);
};
