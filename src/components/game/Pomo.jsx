// src/App.js
import React, { useState, useEffect } from 'react';
import './pomodoro_styles.css';

export default function Pomo({updateStat}) {
  const [studyMinutes, setStudyMinutes] = useState(25);
  const [relaxMinutes, setRelaxMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isStudying, setIsStudying] = useState(true);
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerStopped, setTimerStopped] = useState(false);
  const [savedTime, setSavedTime] = useState(null); // Store remaining time when stopped

  useEffect(() => {
    updateDisplay();
  }, [studyMinutes, relaxMinutes, seconds, isStudying]);

  useEffect(() => {
    if (timerStopped) {
      clearInterval(intervalId);
      setTimerStarted(false);
    }
  }, [timerStopped, intervalId]);

  const updateDisplay = () => {
    const minutes = isStudying ? studyMinutes : relaxMinutes;
    const minutesDisplay = minutes < 10 ? '0' + minutes : minutes;
    const secondsDisplay = seconds < 10 ? '0' + seconds : seconds;
    document.title = `${minutesDisplay}:${secondsDisplay} Pomodoro Timer`;
  };

  const startTimer = () => {
    if (savedTime) { // Resume timer from saved time
      setSeconds(savedTime.seconds);
      setStudyMinutes(isStudying ? savedTime.minutes : studyMinutes);
      setRelaxMinutes(isStudying ? relaxMinutes : savedTime.minutes);
      const id = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            if (isStudying) {
              if (studyMinutes === 0) {
                setIsStudying(false);
                setRelaxMinutes(parseInt(relaxMinutes));
                return 59;
              } else {
                setStudyMinutes((prevMinutes) => prevMinutes - 1);
                return 59;
              }
            } else {
              if (relaxMinutes === 0) {
                setIsStudying(true);
                setStudyMinutes(parseInt(studyMinutes));
                return 59;
              } else {
                setRelaxMinutes((prevMinutes) => prevMinutes - 1);
                return 59;
              }
            }
          } else {
            return prevSeconds - 1;
          }
        });
      }, 1000);
      setIntervalId(id);
      setTimerStarted(true);
      setTimerStopped(false);
      setSavedTime(null);
    } else { // Start timer from initial time
      const id = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            if (isStudying) {
              if (studyMinutes === 0) {
                setIsStudying(false);
                setRelaxMinutes(parseInt(relaxMinutes));
              } else {
                setStudyMinutes((prevMinutes) => prevMinutes - 1);
              }
            } else {
              if (relaxMinutes === 0) {
                setIsStudying(true);
                setStudyMinutes(parseInt(studyMinutes));
              } else {
                setRelaxMinutes((prevMinutes) => prevMinutes - 1);
              }
            }
            return 59;
          } else {
            return prevSeconds - 1;
          }
        });
      }, 1000);
      setIntervalId(id);
      setTimerStarted(true);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setSavedTime({ minutes: isStudying ? studyMinutes : relaxMinutes, seconds });
    setTimerStopped(true);
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setStudyMinutes(25);
    setRelaxMinutes(5);
    setSeconds(0);
    setIsStudying(true);
    setTimerStarted(false);
    setTimerStopped(false);
    setSavedTime(null);
  };

  return (
    <div className='conbody min-h-screen flex justify-center items-center'>
    <div className="container bg-slate-800 w-1/4">
      <h1>Pomodoro Timer</h1>
      <div id="timer">
        <p id="minutes">{isStudying ? (studyMinutes < 10 ? '0' + studyMinutes : studyMinutes) : (relaxMinutes < 10 ? '0' + relaxMinutes : relaxMinutes)}</p>
        <p>:</p>
        <p id="seconds">{seconds < 10 ? '0' + seconds : seconds}</p>
      </div>
      <div id="options">
        <label htmlFor="studyTime">Study Time (minutes):</label>
        <input type="number" id="studyTime" min="1" max="60" value={studyMinutes} onChange={(e) => setStudyMinutes(parseInt(e.target.value))} />
        <br />
        <label htmlFor="relaxTime">Relax Time (minutes):</label>
        <input type="number" id="relaxTime" min="1" max="60" value={relaxMinutes} onChange={(e) => setRelaxMinutes(parseInt(e.target.value))} />
      </div>
      <div id="controls">
        <button onClick={startTimer} disabled={timerStarted}>Start</button>
        <button onClick={stopTimer} disabled={!timerStarted}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div className='flex justify-center mt-14'>
      <button 
              className='bg-indigo-400 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-200 duration-500 '
               onClick={()=>updateStat()}
              >Exit
      </button>
      </div>
    </div>
    
    
    </div>
  );
}
;