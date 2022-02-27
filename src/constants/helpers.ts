import { Timer } from './../interface/Timer';

export const countTimeDiff = (startDate: Date, endDate: Date): Timer => {
  let currentDay = startDate.getDay();
  let dayDiff: any;
  switch (currentDay) {
    case 0: //Sunday
      dayDiff = "0";
      break;
    case 1: //Monday
      dayDiff = "6";
      break;
    case 2: //Tuesday
      dayDiff = "5";
      break;
    case 3: //Wednesday
      dayDiff = "4";
      break;
    case 4: //Thursday
      dayDiff = "3";
      break;
    case 5: //Friday
      dayDiff = "2";
      break;
    case 6: //Saturday
      dayDiff = "1";
      break;
  }
  let hourDiff = (('0') + (endDate.getHours() - startDate.getHours()).toString()).slice(-2);
  let minDiff = (('0') +(endDate.getMinutes() - startDate.getMinutes()).toString()).slice(-2);
  let secDiff = (('0') + (endDate.getSeconds() - startDate.getSeconds()).toString()).slice(-2);

  return {
    day: dayDiff,
    hours: hourDiff,
    mins: minDiff,
    sec: secDiff,
  };
};
