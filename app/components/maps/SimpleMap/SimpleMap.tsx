import { FC } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';

interface ISimpleMap {
  country: string;
}

export const SimpleMap: FC<ISimpleMap> = ({ country }) => {
  return (
    <div style={{ padding: '0 0' }}>
      <ComposableMap>
        <ZoomableGroup center={[10, 0]} zoom={1.1}>
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
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};
