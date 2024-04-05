import React, { useState } from 'react'
import Profiles from './Profiles';
import { Leaderboard } from './database';
import between from './boardfunc'

export default function Board() {

    const [period, setPeriod] = useState(0);

  const handleClick = (e) => {
     
    setPeriod(e.target.dataset.id)
  }

  return (
    <div className='px-20 py-20 bg-black text-white'>
    <div className="board">
        <h1 className='leaderboard'>Leaderboard</h1>

        <div className="duration">
            <button onClick={handleClick} data-id='7'>7 Days</button>
            <button onClick={handleClick} data-id='30'>30 Days</button>
            <button onClick={handleClick} data-id='0'>All-Time</button>
        </div>

        <Profiles Leaderboard={between(Leaderboard, period)}></Profiles>

    </div></div>
  )
}


