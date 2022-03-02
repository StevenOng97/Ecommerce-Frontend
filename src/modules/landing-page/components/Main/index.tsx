import React from 'react';
import './style.scss';
import './responsive.scss';

const Main = () => {
  return (
    <div className="main">
      <div className="container d-flex flex-column justify-content-center w-100">
        <p className="fw-bold mb-0">
          Spring / Summer Collection 2022
        </p>
        <h1 className="my-0">
          Get up to 30% Off New Arrivals
        </h1>
        <button className="btn main-btn">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Main;