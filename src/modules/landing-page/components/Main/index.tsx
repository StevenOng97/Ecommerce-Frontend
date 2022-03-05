import { useEffect, useRef } from 'react';
import './style.scss';
import './responsive.scss';
import Hero from '../../../../assets/Hero.mp4';
import useOnScreen from '../../../../hooks/UseOnScreen';

const Main = () => {
  const videoRef = useRef<any>(null);
  const onScreen = useOnScreen(videoRef, '-300px', 0.1, false);

  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });

  if (videoRef.current) {
    if (onScreen) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  return (
    <div className="main">
      <video ref={videoRef} loop autoPlay muted playsInline>
        <source src={Hero} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Main;
