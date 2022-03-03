import React, { useRef } from 'react';
import './style.scss';
import './responsive.scss';
import Hero from '../../../../assets/Hero.mp4';
import useOnScreen from '../../../../hooks/UseOnScreen';

const Main = () => {
  const videoRef = useRef<any>(null);
  const onScreen = useOnScreen(videoRef, '-300px', 0, false);

  if (videoRef.current) {
    if (onScreen) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  return (
    <div className="main">
      <video autoPlay loop muted ref={videoRef}>
        <source src={Hero} />
      </video>
    </div>
  );
};

export default Main;