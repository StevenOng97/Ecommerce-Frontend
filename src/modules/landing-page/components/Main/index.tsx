import React, { useEffect, useRef, useState, useMemo } from 'react';
import './style.scss';
import './responsive.scss';
import HeroImage from '../../../../assets/Hero1.png';
import useOnScreen from '../../../../hooks/UseOnScreen';

const Main = () => {
  const [isError, setError] = useState<any>(null);
  const videoRef = useRef<any>(null);
  const onMobileScreen = window.innerWidth <= 997;
  const rootMargin = onMobileScreen ? '0px' : '-300px';
  const onScreen = useOnScreen(videoRef, rootMargin, 0.1, false);

  const handleError = (videoElement: any) => {
    setError(true);
    console.log(
      'Error ' +
        videoRef.current.error.code +
        '; details: ' +
        videoRef.current.error.message
    );
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }
  }, []);

  const videoSrc = useMemo(() => process.env.REACT_APP_HERO_VIDEO_SRC, []);

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
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {isError && <img src={HeroImage} width="100%" height="100%" alt="Hero" />}
    </div>
  );
};

export default React.memo(Main);
