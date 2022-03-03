import React, { useRef } from 'react';
import './style.scss';
<<<<<<< HEAD
import './responsive.scss';
=======
import Hero from '../../../../assets/video1.mp4';
import useOnScreen from '../../../../hooks/UseOnScreen';
>>>>>>> 98bef8e0d7ba5cf747a201c55d367b15d9787228

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