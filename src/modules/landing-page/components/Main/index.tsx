import { useEffect, useRef, useState } from 'react';
import './style.scss';
import './responsive.scss';
import Hero from '../../../../assets/Hero.mp4';
import useOnScreen from '../../../../hooks/UseOnScreen';
import ReactPlayer from 'react-player';

const getBase64FromUrl = async (url: string) => {
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      resolve(base64data);
    };
  });
};

const b64toBlob = (b64Data: string, contentType = '', sliceSize = 512) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, { type: contentType });
};

const Main = () => {
  const videoRef = useRef<any>(null);

  const onScreen = useOnScreen(videoRef, '-300px', 0.1, false);
  const [videoUrl, setVideoUrl] = useState<string>('');

  useEffect(() => {
    getBase64FromUrl(Hero).then((b64: any) => {
      const base64 = b64.split(',')[1];
      const blob = b64toBlob(base64);
      const blobUrl = URL.createObjectURL(blob);
      setVideoUrl(blobUrl);
    });
  }, []);

  return (
    <div className="main" ref={videoRef}>
      <ReactPlayer
        playing={onScreen}
        url={videoUrl}
        muted={true}
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
