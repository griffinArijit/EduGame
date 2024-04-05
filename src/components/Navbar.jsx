import { useState } from "react";
import Button from "./Button";
export default function Nav({navset}){

       let Links =[
      {name:"HOME",link:"/"},
      {name:"SERVICE",link:"/"},
      {name:"ABOUT",link:"/"},
      {name:"BLOG'S",link:"/"},
      {name:"CONTACT",link:"/"},
    ];
    const [open,setOpen]=useState(false);
    return(
        <div className='shadow-md w-full fixed top-0 left-0 bg-black'>
      <div className='md:flex items-center justify-between bg-black py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
       text-blue-400'>
        <span className='text-3xl text-white mr-1 pt-2'>
        <ion-icon name="logo-ionic"></ion-icon>
        </span>
        EduGame
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
         
            <li key={"game"} className='md:ml-8 text-xl md:my-0 my-7'>
              
             <button 
              className='bg-black text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'
               onClick={()=>navset(null)}
              >
                Profile
             </button>
             <button 
              className='bg-black text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'
               onClick={()=>navset('game')}
              >
                Game
             </button>
             <button 
              className='bg-black text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'
               onClick={()=>navset('leaderboard')}
              >
                Leaderboard
             </button>
             <button 
              className='bg-black text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'
               onClick={()=>navset('shopping')}
              >
                Shop
             </button>
             <button 
              className='bg-black text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'
               onClick={()=>navset('courses')}
              >
                Courses
             </button>
            </li>
           
        }
       
      </ul>
      </div>
    </div>
    );
};