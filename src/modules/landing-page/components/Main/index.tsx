import { useRef, useState } from 'react';
import './style.scss';
import './responsive.scss';
import Hero from '../../../../assets/Hero.mp4';
import HeroImage from '../../../../assets/Hero1.png';

import useOnScreen from '../../../../hooks/UseOnScreen';
import ReactPlayer from 'react-player';

const Main = () => {
  const [src, setSrc] = useState<any>(Hero);
  const [isError, setError] = useState<any>(null);
  const videoRef = useRef<any>(null);

  const onScreen = useOnScreen(videoRef, '-300px', 0.1, false);

  const handleError = (e: any) => {
    setSrc(HeroImage);
    setError(true);
    console.log("Error1:", e);
  }

  return (
    <div className="main" ref={videoRef}>
      {!isError && <ReactPlayer
        playing={onScreen}
        url={src}
        muted={true}
        loop
        playsinline
        height="100%"
        width="100%"
        onError={handleError}
      />}

      {isError &&
        <img src={HeroImage} width="100%" height="100%" alt="Hero" />
      }

      {/* <video ref={videoRef} loop autoPlay muted playsInline>
        <source src={Hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </div>
  );
};

export default Main;
