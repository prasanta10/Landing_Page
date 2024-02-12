import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ time }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    var timer = time * 60 * 60;
    const interval = setInterval(() => {
      const secondsLeft = Math.floor((timer % 60) % 60);
      const minutesLeft = Math.floor((timer % 3600) / 60);
      const hoursLeft = Math.floor(timer / 3600);

      setSeconds(secondsLeft);
      setMinutes(minutesLeft);
      setHours(hoursLeft);

      if (timer === 0) {
        clearInterval(interval);
      }

      timer--;
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="p-6 text-center">
      <h2 className="text-4xl font-extrabold mb-4">Time is running out</h2>
      <p className="text-xl font-semibold mb-8">Grab your spot fast!</p>
      <div className="flex justify-center">
        <div className="text-6xl font-bold mr-4">
          <span className="text-secondary">{hours}</span> :
        </div>
        <div className="text-6xl font-bold mr-4">
          <span className="text-secondary">{minutes}</span> :
        </div>
        <div className="text-6xl font-bold">
          <span className="text-secondary">{seconds}</span>
        </div>
      </div >
      <button className="bg-gray-600 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mt-8">
        Register and Sign Up 
      </button>
    </div>
  );
};

export default CountdownTimer;