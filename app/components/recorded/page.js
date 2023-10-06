"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import urlLink from "../images/edit.svg"
import copy from "../images/copy.svg"
import facebook from "../images/Facebook svg.svg"
import whatsapp from "../images/Vector.svg"
import telegram from "../images/Group.svg"
import video from "../images/video.png"
import Footer from '../footer/page'
import Card from './card'




export default function Recorded() {
    const [card_visibility, setVisibility] = useState("hidden");
    const send = (e) => {
        e.preventDefault();
        setVisibility("flex");
    }
    const change_visibility = (e) => {
        e.preventDefault();
        setVisibility("hidden");
        console.log("Function " +card_visibility);

      }

    
  return (
    <>
        <Card visibility={card_visibility} change_visibility={change_visibility}/>
        <section className='w-screen px-[100px] flex mt-[40px]'>
            {/* Share video */}
            <div className='w-[50%] pr-[72px] border-r-4 border-[#E7E7ED]'>
                <div className='sora text-[45px] text-[#141414] mb-[40px]'>Your video is ready!</div>
                <div className='flex flex-col gap-[64px]'>

                    <div className='flex flex-col gap-[9px]'>
                        <span className='text-[#727272]'>Name</span>
                        <span className='sora text-[24px] text-[#413C6D] flex gap-3'>
                            <span >Untitled_Video_20232509 </span>
                            <a href='#'> 
                                <Image src={urlLink} width={0} height={0} alt='Video Link'  />
                            </a>
                        </span>
                    </div>

                    
                        <form onSubmit={send} action="" className='w-full  bg-[#E7E7ED] rounded-[16px] px-[24px] py-[12px] flex items-center justify-between'>
                            <input type="text" placeholder='enter email of receiver' className='bg-transparent focus:outline-none w-[80%]' />
                            <button className='bg-[#605C84] rounded-[8px] px-[18px] py-[10px] text-white'>Send</button>
                        </form>

                        
                    <div className='flex flex-col gap-[9px]'>
                        <span className='text-[20px] sora'>Video Url</span>
                        <form action="" className='w-full  bg-[#E7E7ED] rounded-[16px] px-[24px] py-[12px] flex items-center justify-between'>
                            <input type="text" value="https://www.helpmeout/Untitled_Video_20232509" placeholder='enter email of receive' className='bg-transparent focus:outline-none  text-[16px] w-[70%]' />
                            <button className='border-2 flex items-center gap-[8px] border-black rounded-[8px] px-[18px] py-[10px]'><Image src={copy} width={0} height={0} className='w-[20px] h-[20px]' /> Copy</button>
                        </form>
                    </div>

                    <div className='flex flex-col gap-[15px]'>
                        <span className='text-[16px] sora'>Share your video </span>
                        <div className='flex gap-[16px]'>
                            {/* FACEBOOK */}
                            <button className='px-[16px] py-[12px] flex items-center rounded-[6px] border-2 border-black gap-[8px]'><Image src={facebook} width={0} height={0} alt='facebook' className='w-[24px] text-[16px] font-semibold h-[24px]' /> Facebook</button>
                            {/* WHATSAPP */}
                            <button className='px-[16px] py-[12px] flex items-center rounded-[6px] border-2 border-black gap-[8px]'><Image src={whatsapp} width={0} height={0} alt='facebook' className='w-[24px] text-[16px] font-semibold h-[24px]' /> Whatsapp</button>
                            {/* TELEGRAM */}
                            <button className='px-[16px] py-[12px] flex items-center rounded-[6px] border-2 border-black gap-[8px]'><Image src={telegram} width={0} height={0} alt='facebook' className='w-[24px] text-[16px] font-semibold h-[24px]' /> Telegram</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* Transcript */}
            <div className='pl-[40px] flex flex-col gap-[80px]'>
                <div><Image src={video} alt='video' className='cursor-pointer' /></div>
                <div className='flex flex-col gap-[40px]'>
                    <div className='flex flex-col gap-[16px]'>
                        <span className='text-[24px] font-bold sora'>Transcript</span>
                        <span className='text-gray-500'>
                            <select name="language" id="language" className='px-[8px] py-[8px] w-[153px] rounded-[4px] border-2 border-gray-500'>
                                <option value="English">English</option>
                                <option value="English">Yoruba</option>
                                <option value="English">French</option>
                            </select>
                        </span>
                    </div>

                    <div className='max-h-[256px] overflow-y-scroll w-[575px] flex flex-col gap-[16px] inter text-[16px] relative'>
                        <div className='absolute bottom-0 bg-white/60 h-[50px] w-full'>
                            
                        </div>
                        <div className='flex gap-[24px] font-[500]'>
                            <span className='leading-[26.084px]'>0.01</span>
                            <span className='leading-[26.084px]'>First step. Open Facebook on your desktop or mobile device and locate &quot;Marketplace&quot; in the left-hand menu or at the top of the </span>
                        </div>
                        <div className='flex gap-[24px] font-[500]'>
                            <span className='leading-[26.084px]'>0.15</span>
                            <span className='leading-[26.084px]'>First step. Open Facebook on your desktop or mobile device and locate &quot;Marketplace&quot; in the left-hand menu or at the top of the </span>
                        </div>
                        <div className='flex gap-[24px] font-[500]'>
                            <span className='leading-[26.084px]'>0.30</span>
                            <span className='leading-[26.084px]'>First step. Open Facebook on your desktop or mobile device and locate &quot;Marketplace&quot; in the left-hand menu or at the top of the </span>
                        </div>
                        <div className='flex gap-[24px] font-[500]'>
                            <span className='leading-[26.084px]'>1.00</span>
                            <span className='leading-[26.084px]'>First step. Open Facebook on your desktop or mobile device and locate &quot;Marketplace&quot; in the left-hand menu or at the top of the </span>
                        </div>
                        <div className='flex gap-[24px] font-[500]'>
                            <span className='leading-[26.084px]'>1.15</span>
                            <span className='leading-[26.084px]'>First step. Open Facebook on your desktop or mobile device and locate &quot;Marketplace&quot; in the left-hand menu or at the top of the </span>
                        </div>
                        
                    </div>
                </div>

            </div>
        </section>
        {/* Auth section */}
        <section className='flex items-center justify-center my-[64px] py-[48px] bg-gray-300/50'>
            <div className='w-[747px] text-center flex flex-col gap-[40px] items-center'>
                <div className='text-[24px] sora'>
                    To ensure the availability and privacy of your video, we recommend saving it to your account.
                </div>

                <button className='px-[32px] py-[16px] w-fit rounded-[8px] bg-primary text-white'>
                    Save video
                </button>

                <div className='text-[24px] font-[600]'>
                    <span className='opacity-60'>Don&ldquo;t have an account? </span>
                    <a href='#' className='text-primary'>Create account</a>
                </div>
            </div>
        </section>

        <Footer />
    </>
  )
}
