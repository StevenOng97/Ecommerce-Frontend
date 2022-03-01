import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Constants } from '../../../../constants/constant';
import Marker from './components/Marker';

interface GoogleMapsProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

const LocationSection = () => {
  const [googleMapsProps, setMapsProps] = useState<GoogleMapsProps>({
    center: { lat: 0, lng: 0 },
    zoom: 0,
  });

  useEffect(() => {
    const mapsProps = { center: { lat: 59.95, lng: 30.33 }, zoom: 11 };
    setMapsProps(mapsProps);
  }, []);

  return (
    <div className="location-section section">
      <h2 className="section-title">Our Location</h2>
      <div className="container mt-5">
        <div style={{ height: '300px', width: '100%' }}>
          <GoogleMapReact
            defaultCenter={googleMapsProps.center}
            defaultZoom={googleMapsProps.zoom}
            bootstrapURLKeys={{ key: Constants.googleMapsApiKey }}
          >
            <Marker lat={59.955413} lng={30.337844} text={'Kreyser Avrora'} />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
