import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import './style.scss';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface GoogleMapsProps {
  latitude: number;
  longitude: number;
  zoom: number;
}

const LocationSection = () => {
  const [selectingMarker, setSelectingMaker] = useState<boolean | null>(null);
  const [viewport, setViewport] = useState<GoogleMapsProps>({
    latitude: 10.77653,
    longitude: 106.700981,
    zoom: 8,
  });

  return (
    <div className="location-section section">
      <h2 className="section-title">Our Location</h2>
      <div className="container mt-5">
        <ReactMapGL
          {...viewport}
          style={{ width: '100%', height: '50vh' }}
          mapStyle="mapbox://styles/gianguyen221197/cl0899o7n006m15ny5a51fvea"
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onMove={(viewport) => {
            setViewport(viewport.viewState);
          }}
        >
          <Marker longitude={106.700981} latitude={10.77653} anchor="bottom">
            <FontAwesomeIcon
              icon={faMapMarker}
              size="3x"
              className="marker"
              onClick={(e) => {
                e.preventDefault();
                setSelectingMaker(true);
              }}
            />
          </Marker>
          {selectingMarker && (
            <Popup
              longitude={106.700981}
              latitude={10.77653}
              onClose={() => {
                setSelectingMaker(null);
              }}
              anchor="bottom"
              offset={20}
              closeOnClick={false}
            >
              <div>232 Hai Ba Trung P1 Q1</div>
            </Popup>
          )}
        </ReactMapGL>
      </div>
    </div>
  );
};

export default LocationSection;
