import { useEffect, useRef, useState } from 'react';
import './style.scss';
import './responsive.scss';
import Hero from '../../../../assets/Hero.mp4';
import HeroImage from '../../../../assets/Hero1.png';

import useOnScreen from '../../../../hooks/UseOnScreen';

const Main = () => {
  const [src, setSrc] = useState<any>(Hero);
  const [isError, setError] = useState<any>(null);
  const videoRef = useRef<any>(null);

  const onScreen = useOnScreen(videoRef, '-300px', 0.1, false);

  const handleError = (videoElement: any) => {
    setSrc(HeroImage);
    setError(true);
    console.log("Error " + videoRef.current.error.code + "; details: " + videoRef.current.error.message);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }
  });

  if (onScreen && videoRef.current) {
    videoRef.current.play();
  } else if (!onScreen && videoRef.current) {
    videoRef.current.pause();
  }

  return (
    <div className="main">
      {!isError && (
        <video
          ref={videoRef}
          loop
          autoPlay
          muted
          playsInline
          onError={handleError}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {isError && <img src={HeroImage} width="100%" height="100%" alt="Hero" />}
    </div>
  );
};

export default Main;
