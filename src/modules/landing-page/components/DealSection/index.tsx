import React, { useEffect, useState } from 'react';
import './style.scss';
import img from '../../../../assets/dealoftheweek.png';
import { countTimeDiff } from '../../../../constants/helpers';
import { Timer } from '../../../../interface/Timer';

const DealSection = () => {
  const [start, setStart] = useState(new Date());
  const [timeDiff, setTimeDiff] = useState<Timer>({
    day: '',
    hours: '',
    mins: '',
    sec: '',
  });
  var end = new Date();
  end.setHours(23, 59, 59, 999);

  useEffect(() => {
    const timer = setInterval(() => {
      setStart(new Date());
      setTimeDiff(countTimeDiff(start, end));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);

  const { day, hours, mins, sec } = timeDiff;

  return (
    <div className="deal__section section">
      <div className="container d-flex">
        <div className="image-wrapper">
          <img src={img} alt="deal" />
        </div>
        <div className="text-wrapper d-flex">
          <h2 className="section-title">Deal Of The Week</h2>
          <div className="timer-wrapper d-flex">
            <div className="timer">
              <span>{day}</span>
              <span className="text-black">DAYS</span>
            </div>
            <div className="timer">
              <span>{hours}</span>
              <span className="text-black">HOURS</span>
            </div>
            <div className="timer">
              <span>{mins}</span>
              <span className="text-black">MINS</span>
            </div>
            <div className="timer">
              <span key={sec} className="animated">
                {sec}
              </span>

              <span className="text-black">SEC</span>
            </div>
          </div>
          <div>
            <button className="btn btn-secondary">SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealSection;
