import React from 'react';

const Marker = ({ locationName }: any) => {
  return (
    <div className="marker-wrapper">
      {locationName}
    </div>
  );
};

export default Marker;