import React from 'react'
import Image from 'next/image'
import logo from "../images/logo.svg"
import user from "../images/profile-circle.svg"
import video_frame from "../images/video frame.png"
import copy from "../images/copy.svg"
import facebook from "../images/Facebook svg.svg"
import whatsapp from "../images/Vector.svg"
import telegram from "../images/Group.svg"
import urlLink from "../images/edit.svg"

import {PiCaretDownLight} from "react-icons/pi"

export default function VideoRep() {
  return (
    <>
        <section className='px-[100px] py-[24px]'>
            <div className='flex justify-between mb-[40px]'>
                <div className='flex items-center gap-2'>
                    <span>
                        <Image src={logo} width={0} height={0} alt='HelpMeOut logo' className='w-[40px] h-[40px]' />
                    </span>
                    <span className='font-semibold sora text-primary'>
                        HelpMeOut
                    </span>
                </div>
                <div className='flex gap-[8px] items-center 0 px-2 py-1'>
                    <Image src={user} alt='user image' />
                    <span className='work-sans text-[16px]'>John Mark</span>
                    <span className='text-xl'><PiCaretDownLight /></span>
                </div>
            </div>

            <div className='flex gap-[3px]'>
                <span className='work-sans text-[18px] text-[#141414B2]/70'>Home</span>
                <span className='work-sans text-[18px] text-[#141414B2]/70'>/</span>
                <span className='work-sans text-[18px] text-[#141414B2]/70'>Recent Videos </span>
                <span className='work-sans text-[18px] text-[#141414B2]/70'>/</span>
                <span className='work-sans text-[18px] text-[#413C6D]'>How To Create A Facebook Ad Listing me</span>
            </div>

           <div className='flex items-center py-[32px]'>
                <h1 className='sora text-[24px] mr-5'>
                    How To Create A Facebook Ad Listing 
                </h1>
                <span><Image src={urlLink} alt='Url link' /></span>

           </div>

            <div className='mb-[40px]'>
                <Image src={video_frame} alt='video frame' className='w-full' />
            </div>

            <div className='flex justify-between'>
            <form action="" className='w-[46%] opacity-80 bg-[#E7E7ED] rounded-[16px] px-[24px] py-[12px] flex items-center justify-between'>
                <input type="text" placeholder='enter email of receiver' className='bg-transparent focus:outline-none w-[80%]' />
                <button className='bg-[#605C84] rounded-[8px] px-[18px] py-[10px] text-white'>Send</button>
            </form>

            <form action="" className='w-[46%]  bg-[#E7E7ED] rounded-[16px] px-[24px] py-[12px] flex items-center justify-between'>
                <input type="text" value="https://www.helpmeout/Untitled_Video_20232509" placeholder='enter email of receive' className='bg-transparent focus:outline-none  text-[16px] w-[70%]' />
                <button className='border-2 flex items-center gap-[8px] border-black rounded-[8px] px-[18px] py-[10px]'><Image src={copy} width={0} height={0} className='w-[20px] h-[20px]' /> Copy</button>
            </form>
            </div>

            <div className='flex flex-col gap-[15px] mt-[40px]'>
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

                    
                    <div className='flex flex-col gap-[16px] mt-20'>
                        <span className='text-[24px] font-bold sora'>Transcript</span>
                        <span className='text-gray-500'>
                            <select name="language" id="language" className='px-[8px] py-[8px] w-[153px] rounded-[4px] border-2 border-gray-500'>
                                <option value="English">English</option>
                                <option value="English">Yoruba</option>
                                <option value="English">French</option>
                            </select>
                        </span>
                        <div className='max-h-[256px] overflow-y-scroll w-full flex flex-col gap-[16px] inter text-[16px] relative'>
                        <div className='absolute bottom-0 bg-white/60 h-[50px] w-full'>
                            
                        </div>
                        <div className='flex  gap-[24px] text-[20px] w-[80%]  font-[500] mt-8'>
                            <span className='leading-[26.084px] mr-10'>0.01</span>
                            <span className='leading-[26.084px]'>First step. Open Facebook on your desktop or mobile device and locate &quot;Marketplace&quot; in the left-hand menu or at the top of the </span>
                        </div>
                        <div className='flex text-[20px] w-[80%] gap-[24px] font-[500]'>
                            <span className='leading-[26.084px] mr-10'>0.15</span>
                            <span className='leading-[26.084px]'>First step. Open Facebook on your desktop or mobile device and locate &quot;Marketplace&quot; in the left-hand menu or at the top of the </span>
                        </div>
                        <div className='flex text-[20px] w-[80%] gap-[24px] font-[500]'>
                            <span className='leading-[26.084px] mr-10'>0.30</span>
                            <span className='leading-[26.084px]'>First step. Open Facebook on your desktop or mobile device and locate &quot;Marketplace&quot; in the left-hand menu or at the top of the </span>
                        </div>
                        <div className='flex text-[20px] w-[80%] gap-[24px] font-[500]'>
                            <span className='leading-[26.084px] mr-10'>1.00</span>
                            <span className='leading-[26.084px]'>First step. Open Facebook on your desktop or mobile device and locate &quot;Marketplace&quot; in the left-hand menu or at the top of the </span>
                        </div>
                        <div className='flex text-[20px] w-[80%] gap-[24px] font-[500]'>
                            <span className='leading-[26.084px] mr-10'>1.15</span>
                            <span className='leading-[26.084px]'>First step. Open Facebook on your desktop or mobile device and locate &quot;Marketplace&quot; in the left-hand menu or at the top of the </span>
                        </div>
                        
                    </div>
                    </div>
        </section>
    </>
  )
}
