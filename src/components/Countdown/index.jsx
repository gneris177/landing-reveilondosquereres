import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./style.css";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;
const lastDay = new Date(new Date().getFullYear(), 11, 30, 23, 59, 59, 999); 
const timerProps = { isPlaying: true, strokeWidth: 7 };

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div className="dimension">{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

const Countdown = () => {
  const stratTime = Date.now() / 1000; 
  const endTime = lastDay.getTime() / 1000;
  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <div className="container-count-timer">
      <CountdownCircleTimer
        {...timerProps}
        colors="#c6ab83"
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>{renderTime("DIAS", getTimeDays(daysDuration - elapsedTime))}</span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#c6ab83"
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => ({ shouldRepeat: remainingTime - totalElapsedTime > hourSeconds })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>{renderTime("HORAS", getTimeHours(daySeconds - elapsedTime))}</span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#c6ab83"
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => ({ shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>{renderTime("MINUTOS", getTimeMinutes(hourSeconds - elapsedTime))}</span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#c6ab83"
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => ({ shouldRepeat: remainingTime - totalElapsedTime > 0 })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>{renderTime("SEGUNDOS", getTimeSeconds(elapsedTime))}</span>
        )}
      </CountdownCircleTimer>
    </div>
  );
}


export default Countdown