import { useState } from "react";
import Button from "./components/Button";
import Nav from "./components/Navbar";
import Game from "./components/Game";
import LeaderBoard from "./components/LeaderBoard";
import ShoppingCart from "./components/store/ShoppingCart";
import Courses from "./components/Courses";
import ProfilePage from "./components/profile/Pro"

function App() {
  const [navigate,setnavigate]=useState(null);
  const [coin,setcoin]=useState(0);
  const [status,setStatus]=useState([]);
 


  function setNavigateFunc(name){
    setnavigate(name);
  }
  function incCoin(inc){
    setcoin((coin)=>coin+inc);

  }
   function updateStat(stat){
    setStatus((e)=>[stat,...e]);
    stat&&incCoin(stat.coin);
    setNavigateFunc(null);
    console.log(coin);
  }
   
   



  let st=<div className="bg-black h-screen mt-20"><ProfilePage /></div>;
  if(st===null) st=<ProfilePage />;
  else if(navigate==='game' || navigate==='cancel'){
    st=<Game navCancel={setNavigateFunc} updateStat={updateStat}/>
  }
  else if(navigate==='leaderboard') st=<LeaderBoard />;
  else if(navigate==='shopping') st=<div className="mt-10"><ShoppingCart coin={coin}/></div>;
  else if(navigate==='courses') {st=<div className="mt-10"><Courses/></div>;}

  return (
    <>
     {navigate!=='cancel' && <Nav navset={setNavigateFunc}></Nav>}
     {st}
     
    </>
  );
}

export default App;
