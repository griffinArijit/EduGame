import { useState } from "react"
import Quiz1 from "./game/Quiz1";
import Flip from "./game/Flip";
import Pomo from "./game/Pomo"

export default function Game({navCancel,updateStat}){
    const [game,setGame]=useState(null);
    function chooseGame(name){
        setGame(name);
        navCancel('cancel');
    }

    let st=<div className="bg-black h-screen flex justify-center items-center pt-20 gap-20">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-300 px-2 py-4">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Short Quiz</div>
    <p className="text-gray-700 text-base">
      Its a short quiz you get 10 second to answer.You can skip also.you will get 2 coins for correct and deduct 1 for wrong.
    </p>
  </div>
  <button 
           className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'
            onClick={()=>chooseGame('quiz1')}
           >
             Start quiz 
    </button>
</div>
<div className="max-w-sm rounded overflow-hidden shadow-lg  bg-blue-300 px-2 py-4">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Flip card</div>
    <p className="text-gray-700 text-base">
      Think about the solution and oposite side of the card you get your answer.Dont flip the card early it will bw fun.
    </p>
  </div>
  <button 
           className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'
            onClick={()=>chooseGame('flip')}
           >
             Flipping card
    </button>
</div>
<div className="max-w-sm rounded overflow-hidden shadow-lg  bg-blue-300 px-2 py-4">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2"> Pomodoro timer</div>
    <p className="text-gray-700 text-base">
      Study timer challenge take a challenge work continousely untill time is over.It also have a music for relax.
    </p>
  </div>
  <button 
           className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'
            onClick={()=>chooseGame('pomo')}
           >
             Pomodoro timer
    </button>
</div>





   
    
 </div>;
    if(game==='quiz1'){
        st=<Quiz1 navCancel={navCancel} updateStat={updateStat}/>;
    }
    else if(game==='flip'){
        st=<Flip updateStat={updateStat}/>
    }
    else if(game==='pomo'){
      st=<Pomo updateStat={updateStat}/>
    }
    return (st);
}