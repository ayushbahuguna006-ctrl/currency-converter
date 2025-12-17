import { useState } from 'react'

import './App.css'

function App() {
 

  return (
    <>
      <div className=' min-h-screen    '>
        

            <div className=' p-3 bg-gradient-to-r from-[#0b1f24] via-[#0f3d3e] to-[#14532d] w-full flex justify-between border-black border-y-1'>
                <div id='heading' className='flex text-blue-100  text-sm md:font-light font-extralight md:text-2xl sm:pr-4' ><div>Currency</div><div>-Converter💱</div></div>
                             <video
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    className="fixed inset-0 w-full h-full object-cover -z-10"
  >
    <source src="/waves.mp4" type="video/mp4" />
  </video>
        
                          <div>
                                 <div
                                 className=" top-5 left-6 z-50 cursor-pointer space-y-1 pl-14 pt-1 md:pl-100 "
                                  
                                                                                         >
                                     <span className="block w-5 h-0.5 bg-white"></span>
                                       <span className="block w-5 h-0.5 bg-white"></span>
                                        <span className="block w-5 h-0.5 bg-white"></span>
                                   </div>

                          </div>




            </div>

         <div className='bg-gradient-to-r from-[#0b1f24] via-[#0f3d3e] to-[#14532d] h-8 border-white border-y-1  w-full flex justify-between md:flex md:justify-around items-center md:font-bold py-6 px-4'>
                  <div id='animatetwo' className='font-light  bg-black px-2  rounded-sm border text-sm border-yellow-100 md:pl-3 text-white '><a href="">Home</a></div>
                 <div className='pr-20 pt-0.95 '> <div id='animatethree' className=' bg-black text-white border md:mr-50 border-blue-500 text-sm px-2 py-0.5 rounded-sm'><a href="">About</a></div></div>
                  <div id='animatefour' className='text-red-600 font-black   text-lg     hover:bg-red-800 hover:text-white cursor-pointer  rounded-sm p-1  ' ><a href="">Sign In</a></div>

         </div>

         <div id='ani2' className='flex justify-center  py-10 text-sm font-extralight'>
             <div className='flex px-4'> <div id='animate1'><h1>W</h1></div>
                   <div id='animate2'><h1>H</h1></div>
                   <div id='animate3'><h1>E</h1></div>
                   <div id='animate4'><h1>R</h1></div>
                   <div id='animate5'><h1>E</h1></div>
             </div>
              <div className='flex'> <div><h1 id='animate6'>I</h1></div>
                    <div id='animate7'><h1>N</h1></div>
                    <div id='animate8'><h1>N</h1></div>
                    <div id='animate9'><h1>O</h1></div>
                    <div id='animate10'><h1>V</h1></div>
                    <div id='animate11'><h1>A</h1></div>
                    <div id='animate12'><h1>T</h1></div>
                    <div id='animate13'><h1>I</h1></div>
                    <div id='animate14'><h1>O</h1></div>
                    <div id='animate15'><h1>N</h1></div>
              <div className='flex px-4'> <div id='animate16'><h1>S</h1></div>
                    <div id='animate17'><h1>T</h1></div>
                    <div id='animate18'><h1>A</h1></div>
                    <div id='animate19'><h1>R</h1></div>
                    <div id='animate20'><h1>T</h1></div>
                    <div id='animate21'><h1>S</h1></div>
                    <div id='animate22'><h1>!</h1></div>
              </div>
            </div>


         </div>










        <div className='flex justify-center min-h-[400px] pt-6'>
            <div id='ani1' className=' bg-green-50 min-h-30   rounded-xl w-[90%] sm:w-full md:w-[70%] lg:w-[30%] border-green-200 border-4'>
                <div className='text-center p-6 '><h1 className='text-stone-700 font-black text-2xl '>CURRENCY CONVERTER</h1></div>
                <div className='flex justify-center'> <hr className='w-[90%]'/></div><br />
                <div className='pt-6 pb-6 pr-7 text-center bg-green-50 font-semibold border border-green-50 rounded-2xl 'id='animate'>AMOUNT:  <label className='bg-white'><input type='number' placeholder='  Enter Amount Here ' min={1} className='border-3 font-medium border-black rounded-sm'/></label></div>
                <div className='flex justify-center p-4'>
                              <div className='pr-20'><label className='flex bg-green-200 rounded-sm font-light border-black border'>FROM: <div className=' border-black border-2 rounded-sm bg-yellow-100 text-blue-500'><select><option >USD</option><option >INR</option><option >EUR</option><option >GBP</option><option >AUD</option></select></div></label></div>
                              <div ><label className='flex bg-green-200 rounded-sm border-black border'>TO:   <div className='border-2 border-black  rounded-sm bg-yellow-100 font-light  text-blue-500'><select><option >INR</option><option >USD</option><option >EUR</option><option >GBP</option><option >AUD</option></select></div></label></div>
                </div>
                <div className='text-center pt-10 pl-5 '><button className='bg-black text-white rounded-2xl text-base py-4   font-semibold  px-3 hover:ring hover:ring-offset-2 hover:ring-red-200 hover:text-white hover:from-teal-600 hover:to-blue-200 hover:bg-linear-to-r transition-all duration-300 transform hover:scale-105 shadow-2xl ring ring-offset-1 ring-blue-500 hover:cursor-pointer '>CONVERT</button></div>

            </div>

       </div>






      </div>
    </>
  )
}

export default App
