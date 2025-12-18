import { useState } from 'react'

import './App.css'

function App() {
 

  return (
    <>
      <div className=' min-h-screen    '>
        

            <div className=' p-3 bg-gradient-to-r from-[#0b1f24] via-[#0f3d3e] to-[#14532d] w-full flex justify-between border-black border-y-1'>
                <div id='heading' className='flex text-blue-100  text-xl md:font-light font-medium md:text-2xl sm:pr-4' ><div>Currency</div><div>-Converter💱</div></div>
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
                                     <span className="block w-5 h-1 bg-white"></span>
                                       <span className="block w-5 h-1 bg-white"></span>
                                        <span className="block w-5 h-1 bg-white"></span>
                                   </div>

                          </div>




            </div>

         <div className='bg-gradient-to-r from-[#0b1f24] via-[#0f3d3e] to-[#14532d] h-8 border-white border-y-1  w-full flex justify-between md:flex md:justify-around items-center md:font-bold py-6 px-4 scroll '>
                  <div id='animatetwo' className='font-black   px-2  rounded-sm  text-base md:pl-3 text-gray-500 py-0.5 border-black border-2 hover:bg-black hover:text-white'><a href="">Home</a></div>
                 <div className=' pt-0.95 md:pl-10  '> <div id='animatethree' className=' hover:bg-black hover:text-white text-gray-500   border-black border-2 text-base px-2 py-0.5 rounded-sm font-black'><a href="">About</a></div></div>
                  <div id='animatefour' className='text-white font-bold   text-base    hover:bg-red-800 hover:text-white hover:border-black hover:border-3 cursor-pointer font-mono  rounded-sm p-0.5 bg-gradient-to-r from-[#0b1f24] via-[#0f3d3e] to-[#14532d] border-2 border-white ' ><a href="">Sign In</a></div>

         </div>


         <div id='ani2' className='flex justify-center  py-10 text-lg font-mono'>
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
<section id='ani20' className="max-w-4xl mx-auto  px-6  text-white  ">
{/* Heading */}
<h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center text-white ">
About This Project 
</h2>


{/* Card */}
<div className="bg-transparent border-white border rounded-2xl p-8 shadow-lg space-y-6">
{/* Why Section */}
<div>
<h3 className="text-xl font-bold mb-2 ">Why this Currency Converter was built  ?</h3>
<p className="text-gray-300 leading-relaxed">
This Currency Converter was created to solve a real‑world problem of converting
currencies quickly and accurately. It also serves as a practical project to
understand API integration, state management in React, and responsive UI design
using Tailwind CSS.
</p>
</div>


{/* How It Works */}
<div>
<h3 className=" text-xl font-bold  mb-2">How it works  ?</h3>
<ul className="list-disc list-inside text-gray-300 space-y-2">
<li>User enters an amount and selects source and target currencies</li>
<li>The app fetches live exchange rates from a currency API</li>
<li>The amount is converted using the latest exchange rate</li>
<li>The result is displayed instantly without page reload</li>
</ul>
</div>


{/* Tech Stack */}
<div>
<h3 className="text-xl font-medium mb-2">Technologies used</h3>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-1 rounded-full bg-white/20">React</span>
<span className="px-4 py-1 rounded-full bg-white/20">Tailwind CSS</span>
<span className="px-4 py-1 rounded-full bg-white/20">JavaScript</span>
<span className="px-4 py-1 rounded-full bg-white/20">Currency Exchange API</span>
</div>
</div>


{/* Learning Outcome */}
<div>
<h3  className="text-xl font-medium mb-2">What I learned  ?</h3>
<p className="text-gray-300 leading-relaxed">
This project helped me strengthen my understanding of React components,
API handling, real‑time data updates, and clean UI design. It is a step
toward building production‑ready frontend applications.
</p>
</div>
</div>
</section>









        <div className='flex justify-center min-h-[420px] pt-6'>
            <div id='ani1' className=' bg-transparent min-h-30   rounded-xl w-[90%] sm:w-full md:w-[70%] lg:w-[25%] border-cyan-100 border'>
                <div className='text-center p-6 '><h1 className='text-purple-100 font-mono text-2xl '>CURRENCY CONVERTER</h1></div>
                <div className='flex justify-center'> <hr className='w-[90%]'/></div><br />
                <div className='pt-3 pb-6 pl-2 text-center bg-transparent text-lg text-black font-bold rounded-2xl 'id='animate'><p className='text-gray-200 mb-4 font-mono text-xl'>AMOUNT    </p>  <label className='h-6 '><input type='number' placeholder='              Enter Amount Here ' min={1} className='  ring ring-black ring-offset ring-offset-black text-white font-medium text-sm  rounded-md h-7 w-60 '/></label></div>
                <div className='flex justify-center p-4'>
                              <div className='pr-20'><label className='flex  bg-transparent rounded-sm text-base text-white font-light border-black border p-2 '><p className='mr-2'>FROM </p><div className=' border-black border-2 rounded-sm bg-transparent text-cyan-200 font-semibold'><select><option >USD</option><option >INR</option><option >EUR</option><option >GBP</option><option >AUD</option></select></div></label></div>
                              <div ><label className='flex bg-transparent rounded-sm border-black text-white border text-lg p-2 font-bold'><p className='mr-2 font-light'>TO</p>   <div className='border-2 border-black  rounded-sm bg-transparent font-semibold text-base  text-cyan-200 '><select><option >INR</option><option >USD</option><option >EUR</option><option >GBP</option><option >AUD</option></select></div></label></div>
                </div>
                <div className='text-center pt-6 pl-5 '><button className='bg-black text-white rounded-2xl text-lg py-4   font-mono  px-3 hover:ring hover:ring-offset-2 hover:ring-black hover:text-white hover:from-teal-600 hover:to-blue-200 hover:bg-linear-to-r transition-all duration-300 transform hover:scale-100 shadow-2xl ring ring-teal-500 hover:cursor-pointer '>CONVERT</button></div>

            </div>

       </div>
    <footer className="w-full py-5 text-center text-gray-400 text-sm mt-35 ">
  <div>Ayush © copyrightlimited</div>
</footer>






      </div>
    </>
  )
}

export default App
