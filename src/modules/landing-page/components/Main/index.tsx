import { useRef } from 'react';
import './style.scss';
import './responsive.scss';
import Hero from '../../../../assets/Hero.mp4';
import useOnScreen from '../../../../hooks/UseOnScreen';
import ReactPlayer from 'react-player';

const Main = () => {
  const videoRef = useRef<any>(null);
  const onScreen = useOnScreen(videoRef, '-300px', 0.1, false);
  
  return (
    <div className="main" ref={videoRef}>
      <ReactPlayer
        playing={onScreen}
        url={Hero}
        muted
        loop
        playsinline
        height="100%"
        width="100%"
      />

      {/* <video ref={videoRef} loop autoPlay muted playsInline>
        <source src={Hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </div>
  );
};

export default Main;
