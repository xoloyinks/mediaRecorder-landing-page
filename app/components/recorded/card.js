import React, { useState } from 'react'
import Image from 'next/image'
import {FaRegTimesCircle} from "react-icons/fa"
import gif from "../images/41f1d929caad1fc02b4611e745464502.gif"


export default function Card({visibility, change_visibility}) {    
  return (
    <>
        <section className={`w-screen h-screen absolute top-0 ${visibility} justify-center items-center bg-black/25`}>
            <div className=' bg-[#F2F4F7] flex flex-col gap-10 max-w-[398px] relative px-[70px] py-[80px] rounded-[24px]'>
                <span onClick={change_visibility} className='absolute text-2xl top-10 right-10 opacity-60'><FaRegTimesCircle /></span>
                <div>
                  <Image src={gif} width={0} height={0}  alt='Envelope gif' className='w-[218px] h-[156px] mx-auto' />
                  <div className='text-center text-md work-sans'>
                    Your video link has been sent to <span className='font-semibold text-md text-primary'>johnmark@gmail.com</span>
                  </div>
                </div>
                <div className='flex flex-col justify-center gap-3 text-sm text-center'>
                  <span>Would you need to view this video later? Save to your account now!</span>
                  <button className='px-[10px] py-[8px] mx-auto text-[11px] w-fit rounded-[8px] bg-primary text-white'>Save video</button>
                </div>
                <div className='text-[12px] text-center font-[600]'>
                    <span className='opacity-60'>Don’t have an account? </span>
                    <a href='#' className='text-primary'>Create account</a>
                </div>
            </div>
            
        </section>
    </>
  )
}
