import { useState } from 'react'

import './App.css'

function App() {
 

  return (
    <>
      <div className='flex min-h-screen   justify-center items-center '>
        

            <div className='absolute top-0 p-8 bg-black w-full flex justify-end'>
                <div id='heading' className='flex text-white  text-xl md:font-light font-light md:text-2xl ' ><div>Currency</div><div>-Converter💱</div></div>
                             <video
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    className="fixed inset-0 w-full h-full object-cover -z-10"
  >
    <source src="/coins.mp4" type="video/mp4" />
  </video>
        
                          <div>
                                 <div
                                 className="fixed top-9.5 left-6 z-50 cursor-pointer space-y-1"
                                  
                                                                                         >
                                     <span className="block w-7 h-1 bg-white"></span>
                                       <span className="block w-7 h-1 bg-white"></span>
                                        <span className="block w-7 h-1 bg-white"></span>
                                   </div>

                          </div>




            </div>















            <div className=' bg-white min-h-100   rounded-xl w-full sm:w-full md:w-full lg:w-[30%] '>
                <div className='text-center p-6 '><h1 className='text-stone-700 font-semibold text-2xl '>CURRENCY CONVERTER</h1></div>
                <div className='flex justify-center'> <hr className='w-[90%]'/></div><br />
                <div className='pt-6 pb-6 pr-7 text-center bg-red-50 font-semibold border-2 border-red-100 rounded-2xl 'id='animate'>AMOUNT:  <label className='bg-white'><input type='number' placeholder='  Enter Amount Here' min={1} className='border-3 font-medium border-black rounded-sm'/></label></div>
                <div className='flex justify-center p-4'>
                              <div className='pr-20'><label className='flex bg-green-200 rounded-sm font-light'>FROM: <div className='border border-black rounded-sm bg-yellow-100'><select><option >USD</option><option >INR</option><option >EUR</option><option >GBP</option><option >AUD</option></select></div></label></div>
                              <div ><label className='flex bg-green-200 rounded-sm'>TO:   <div className='border border-black rounded-sm bg-yellow-100 font-light'><select><option >INR</option><option >USD</option><option >EUR</option><option >GBP</option><option >AUD</option></select></div></label></div>
                </div>
                <div className='text-center pt-10 pl-5 '><button className='bg-black text-white rounded-2xl text-base p-4   font-semibold  px-6 hover:ring hover:ring-offset-2 hover:ring-red-200 hover:text-white hover:from-blue-400 hover:to-purple-500 hover:bg-linear-to-r transition-all duration-300 transform hover:scale-105 shadow-2xl ring ring-offset-1 ring-blue-500 hover:cursor-pointer '>CONVERT</button></div>

            </div>








      </div>
    </>
  )
}

export default App
