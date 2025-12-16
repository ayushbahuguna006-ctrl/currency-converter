import { useState } from 'react'

import './App.css'

function App() {
 

  return (
    <>
      <div className='flex min-h-screen bg-black  justify-center items-center '>
            <div className=' bg-gray-100 min-h-100  rounded-xl w-full sm:w-full md:w-full lg:w-[30%] '>
                <div className='text-center p-6 bg-white'><h1 className='text-blue-400 font-bold text-2xl '>CURRENCY CONVERTER</h1></div>
                <div className='flex justify-center'> <hr className='w-[90%]'/></div><br />
                <div className='pt-6 pb-6 pr-7 text-center bg-red-50 font-semibold '>AMOUNT:  <label className='bg-white'><input type='number' min={1} className='border-2 border-black rounded-sm'/></label></div>
                <div className='flex justify-center '>
                              <div className='pr-20'><label className='flex bg-green-200 rounded-sm font-light'>FROM: <div className='border border-black rounded-sm bg-yellow-100'><select><option >USD</option><option >INR</option><option >EUR</option><option >GBP</option><option >AUD</option></select></div></label></div>
                              <div ><label className='flex bg-green-200 rounded-sm'>TO:   <div className='border border-black rounded-sm bg-yellow-100 font-light'><select><option >INR</option><option >USD</option><option >EUR</option><option >GBP</option><option >AUD</option></select></div></label></div>
                </div>
                <div className='text-center pt-15 pl-5 '><button className='bg-black text-white rounded-2xl text-base p-4   font-semibold  px-6 hover:ring hover:ring-offset-2 hover:ring-red-200 hover:text-white hover:from-blue-400 hover:to-purple-500 hover:bg-gradient-to-r transition-all duration-300 transform hover:scale-105 shadow-2xl ring ring-offset-1 ring-blue-500 hover:cursor-pointer '>CONVERT</button></div>

            </div>








      </div>
    </>
  )
}

export default App
