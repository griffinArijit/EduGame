import {useState} from 'react'
import './flip.css'
 

export default function Flip({updateStat}){
  const [activeCard, setActiveCard] = useState(false)

  const handleFlip = () => {
    setActiveCard(!activeCard);
    // if(activeCard) updateStat();
  }
  return (
    <>
    <div className='flipbody'>
      <div className='centered'>  
        <div 
        onClick={handleFlip}
        className={`relative card ${activeCard? 'cardFlip':''}`}>
            {/* front */}
            <div className='front rounded  shadow-lg bg-blue-500'>
            <div className="w-60 h-96">
                {/*content  */}
            <div class="max-w-sm rounded overflow-hidden">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Question</div>
        <p class="text-gray-700 text-base">
           Why banana pills are slippery?
        </p>
      </div>
      {/* <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div> */}
    </div>
                
                
                </div>
            </div>




            {/* back */}
            <div className="absolute top-0 back rounded  shadow-lg bg-blue-500">
            <div className="w-60 h-96"> 
            {/*content  */}
            <div class="max-w-sm rounded overflow-hidden">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Answer</div>
        <p class="text-gray-700 text-base">
       The amount of friction between a shoe, a banana skin, and the floor. Turns out, the friction coefficient was at an almost nonexistent 0.07 – walking with the banana peel was 6 times slippier than normal friction between a shoe and the floor.

        <p className=' mt-6 px-2 py-2 bg-blue-300 rounded'>You got it!!</p>
        </p>
      </div>
      {/* <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div> */}
    </div>
            </div>
            </div>
        </div>
      </div>
      <div className='flex justify-center mt-14'>
      <button 
              className='bg-indigo-400 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-200 duration-500 '
               onClick={()=>updateStat()}
              >OK
      </button>
      </div>
    </div>
  </>
  )
}
;